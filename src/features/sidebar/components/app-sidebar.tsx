import { Frame, Map, PieChart } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { NavMain } from '@/features/sidebar/components/nav-main';
import { NavUser } from '@/features/sidebar/components/nav-user';
import type { ComponentProps } from 'react';
import avatar from '/avatar.jpg';
import {
  SiNodedotjs,
  SiNx,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si';

const data = {
  user: {
    name: 'Sviatoslav Chyzh',
    email: '',
    avatar: avatar,
  },
  navMain: [
    {
      title: 'React',
      url: '#',
      icon: SiReact,
      isActive: true,
      items: [
        {
          title: 'React experience',
          url: '#',
        },
      ],
    },
    {
      title: 'Typescript',
      url: '#',
      icon: SiTypescript,
    },
    {
      title: 'Tailwind CSS',
      url: '#',
      icon: SiTailwindcss,
    },
    {
      title: 'Tanstack',
      url: '#',
      icon: SiReactquery,
    },
    {
      title: 'NX',
      url: '#',
      icon: SiNx,
    },
    {
      title: 'React Router',
      url: '#',
      icon: SiReactrouter,
    },
    {
      title: 'Validation',
      url: '#',
      icon: SiZod,
    },
    {
      title: 'React Hook Form',
      url: '#',
      icon: SiReacthookform,
    },
    {
      title: 'Node.js',
      url: '#',
      icon: SiNodedotjs,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/*<NavProjects projects={data.projects} />*/}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
