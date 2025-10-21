'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { CSSProperties } from 'react';
import SkillBar from '@/components/skill-bar';
import { useIsMobile } from '@/hooks/use-mobile';

const skillCategories = {
  frontend: {
    skills: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
      { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-500' },
      { name: 'JavaScript', level: 92, color: 'from-yellow-500 to-yellow-300' },
      { name: 'HTML', level: 98, color: 'from-orange-600 to-orange-400' },
      { name: 'CSS', level: 88, color: 'from-blue-500 to-blue-300' },
      { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-teal-300' },
    ],
  },
  backend: {
    skills: [
      { name: 'Node.js', level: 80, color: 'from-green-600 to-green-400' },
      { name: 'Express.js', level: 75, color: 'from-gray-600 to-gray-400' },
      { name: 'PostgreSQL', level: 70, color: 'from-blue-700 to-blue-500' },
      { name: 'REST APIs', level: 85, color: 'from-purple-600 to-purple-400' },
    ],
  },
  tools: {
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-600 to-red-500' },
      { name: 'Docker', level: 70, color: 'from-blue-600 to-blue-400' },
      { name: 'Testing', level: 80, color: 'from-green-600 to-green-400' },
      { name: 'Agile', level: 85, color: 'from-purple-600 to-purple-400' },
    ],
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative grid items-center overflow-x-clip"
      style={{ '--vt-name': '--skills' } as CSSProperties}
    >
      <div className="container my-24">
        <Card>
          <CardHeader>
            <CardTitle className="mb-6 text-center text-4xl font-bold md:text-5xl">
              Skills & <span className="text-primary">Technologies</span>
            </CardTitle>
            <CardDescription className="text-muted-foreground text-center text-lg">
              Technologies and tools I work with to create amazing web experiences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="frontend" className="flex w-full flex-col items-center gap-8">
              <TabsList className="mb-4 flex h-fit flex-wrap justify-center gap-4">
                <TabsTrigger className="px-8 text-xl hover:cursor-pointer" value="frontend">
                  🎨 Frontend
                </TabsTrigger>
                <TabsTrigger className="px-8 text-xl hover:cursor-pointer" value="backend">
                  ⚙️ Backend
                </TabsTrigger>
                <TabsTrigger className="px-8 text-xl hover:cursor-pointer" value="tools">
                  🛠 Tools & Practices
                </TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="w-2/3 space-y-4 md:m-6">
                <Card className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    {skillCategories['frontend'].skills.map((skill, index) => (
                      <div key={skill.name} className="animate-slide-up">
                        <SkillBar skill={skill} index={index} />
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="backend" className="w-2/3 space-y-4 md:m-6">
                <Card className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    {skillCategories['backend'].skills.map((skill, index) => (
                      <div key={skill.name} className="animate-slide-up">
                        <SkillBar skill={skill} index={index} />
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="tools" className="w-2/3 space-y-4 md:m-6">
                <Card className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    {skillCategories['tools'].skills.map((skill, index) => (
                      <div key={skill.name} className="animate-slide-up">
                        <SkillBar skill={skill} index={index} />
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
