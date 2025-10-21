'use client';

import { useState } from 'react';

interface SkillBarProps {
  skill: { name: string; level: number; color: string };
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsVisible(true)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-foreground text-sm font-medium">{skill.name}</span>
        <span className="text-muted-foreground text-xs">{skill.level}%</span>
      </div>

      <div className="bg-surface h-2 overflow-hidden rounded-full">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-90'
          }`}
          style={{
            width: `${skill.level}%`,
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
          }}
        />
      </div>
    </div>
  );
}
