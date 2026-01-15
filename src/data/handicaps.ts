import type { Handicap } from '../types';

export const handicaps: Handicap[] = [
  {
    id: 'no-left-footed',
    name: 'No Left-Footed Players',
    description: 'Not allowed to use left-footed players in the starting lineup',
  },
  { id: 'no-substitutions', name: 'No Substitutions', description: 'Not allowed to make any substitutions during the match' },
  {
    id: 'no-sprint-attacking',
    name: 'No Sprint When Attacking',
    description: 'Not allowed to use sprint button when in possession of the ball',
  },
  {
    id: 'no-sprint-defending',
    name: 'No Sprint When Defending',
    description: 'Not allowed to use sprint button when defending',
  },
  {
    id: 'no-sprint',
    name: 'No Sprint',
    description: 'Not allowed to use sprint button at all',
  },
  {
    id: 'manual-gk',
    name: 'Manual Goalkeeper',
    description: 'Must control goalkeeper manually, no AI assistance',
  },
  {
    id: 'no-through-balls',
    name: 'No Through Balls',
    description: 'Not allowed to use through ball passes',
  },
  {
    id: 'no-crosses',
    name: 'No Crosses',
    description: 'Not allowed to cross the ball into the box',
  },
  {
    id: 'no-shooting-outside-box',
    name: 'No Shots Outside Box',
    description: 'Not allowed to shoot from outside the penalty area',
  },
  {
    id: 'first-touch-only',
    name: 'First Touch Only',
    description: 'Must pass or shoot on first touch, no dribbling',
  },
  {
    id: 'no-skill-moves',
    name: 'No Skill Moves',
    description: 'Not allowed to use skill moves or tricks',
  },
  {
    id: 'weak-foot-only',
    name: 'Weak Foot Only',
    description: 'Can only use weak foot for shooting and passing',
  },
  {
    id: 'no-pressing',
    name: 'No Pressing',
    description: 'Not allowed to use team pressing or high press tactics',
  },
  {
    id: 'no-counter-attacks',
    name: 'No Counter Attacks',
    description: 'Must build up play slowly, no fast breaks',
  },
  {
    id: 'minimum-possession',
    name: 'Minimum 60% Possession',
    description: 'Must maintain at least 60% possession throughout the match',
  },
];
