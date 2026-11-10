import { MonitorSmartphone, Server, Wrench, type LucideIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import SectionHeading from '@/app/_components/SectionHeading';
import { sectionTimeline } from '@/app/_components/nav';
import { SKILL_GROUPS, type SkillGroupId } from '@/app/constants';

const GROUP_ICONS: Record<SkillGroupId, LucideIcon> = {
  frontend: MonitorSmartphone,
  backend: Server,
  tools: Wrench,
};

/**
 * All three groups are visible at once (no tabs to click through). The level is
 * always available as text; the bar is a decorative repetition of that number.
 */
export default async function Skills() {
  const t = await getTranslations('skills');

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-24"
      style={sectionTimeline('skills')}
    >
      <div className="shell">
        <SectionHeading
          id="skills-heading"
          title={t.rich('title', {
            highlight: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
          description={t('description')}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.id];
            const headingId = `skills-${group.id}`;

            return (
              <div key={group.id} className="reveal bg-card rounded-xl border p-6 shadow-sm">
                <h3 id={headingId} className="flex items-center gap-3 text-lg font-semibold">
                  <span
                    className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </span>
                  {t(`groups.${group.id}`)}
                </h3>

                <ul aria-labelledby={headingId} className="mt-6 space-y-5">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground tabular-nums">{skill.level}%</span>
                      </div>
                      <div
                        className="bg-muted mt-2 h-2 overflow-hidden rounded-full"
                        aria-hidden="true"
                      >
                        <div
                          className="skill-bar bg-primary h-full rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
