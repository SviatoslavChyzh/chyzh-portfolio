import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { CSSProperties } from 'react';

export default async function Skills() {
  return (
    <section
      id="skills"
      className="relative grid items-center overflow-x-clip"
      style={{ '--vt-name': '--skills' } as CSSProperties}
    >
      <div className="container my-24">
        <Card className="overflow-hidden bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 dark:from-gray-900 dark:to-indigo-900">
          <CardHeader>
            <CardTitle className="tracking-widest">Skills</CardTitle>
            <CardDescription>Technologies and tools I work with</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="tools">Tools & Practices</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 px-3 py-1 text-sm transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 px-3 py-1 text-sm transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-300 px-3 py-1 text-sm transition-colors hover:bg-blue-200 dark:bg-blue-600 dark:hover:bg-blue-800"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 px-3 py-1 text-sm transition-colors hover:bg-yellow-200 dark:bg-yellow-900 dark:hover:bg-yellow-800"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 px-3 py-1 text-sm transition-colors hover:bg-orange-200 dark:bg-orange-900 dark:hover:bg-orange-800"
                  >
                    HTML
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 px-3 py-1 text-sm transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
                  >
                    CSS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-100 px-3 py-1 text-sm transition-colors hover:bg-cyan-200 dark:bg-cyan-900 dark:hover:bg-cyan-800"
                  >
                    Tailwind CSS
                  </Badge>
                </div>
              </TabsContent>
              <TabsContent value="backend" className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 px-3 py-1 text-sm transition-colors hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 px-3 py-1 text-sm transition-colors hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800"
                  >
                    Express.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 px-3 py-1 text-sm transition-colors hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800"
                  >
                    REST API
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 px-3 py-1 text-sm transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
                  >
                    PostgreSQL
                  </Badge>
                </div>
              </TabsContent>
              <TabsContent value="tools" className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-red-100 px-3 py-1 text-sm transition-colors hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800"
                  >
                    Git
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 px-3 py-1 text-sm transition-colors hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800"
                  >
                    Jest
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 px-3 py-1 text-sm transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
                  >
                    React Testing Library
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 px-3 py-1 text-sm transition-colors hover:bg-teal-200 dark:bg-teal-900 dark:hover:bg-teal-800"
                  >
                    Agile
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 px-3 py-1 text-sm transition-colors hover:bg-teal-200 dark:bg-teal-900 dark:hover:bg-teal-800"
                  >
                    Scrum
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 px-3 py-1 text-sm transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
                  >
                    Jira
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 px-3 py-1 text-sm transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
                  >
                    Confluence
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 px-3 py-1 text-sm transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    GitHub
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 px-3 py-1 text-sm transition-colors hover:bg-orange-200 dark:bg-orange-900 dark:hover:bg-orange-800"
                  >
                    GitLab
                  </Badge>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
