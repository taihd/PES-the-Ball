import type { Handicap } from '../types';

export const handicaps: Handicap[] = [
  {
    id: 'no-left-footed',
    name: 'Không dùng cầu thủ thuận chân trái',
    // description: 'Not allowed to use left-footed players in the starting lineup',
    description: '',
  },
  { id: 'no-substitutions', name: 'Không được thay người', // description: 'Not allowed to make any substitutions during the match'
    description: '',
  },
  {
    id: 'no-sprint-attacking',
    name: 'Khi có bóng không được bấm chạy',
    // description: 'Not allowed to use sprint button when in possession of the ball',
    description: '',
  },
  // {
  //   id: 'no-sprint-defending',
  //   name: 'No Sprint When Defending',
  //   description: 'Not allowed to use sprint button when defending',
  // },
  // {
  //   id: 'no-sprint',
  //   name: 'No Sprint',
  //   description: 'Not allowed to use sprint button at all',
  // },
  {
    id: 'no-through-balls',
    name: 'Không chọc khe',
    // description: 'Not allowed to use through ball passes',
    description: '',
  },
  {
    id: 'no-crosses',
    name: 'Không chơi tạt',
    // description: 'Not allowed to cross the ball into the box',
    description: '',
  },
  {
    id: 'no-shooting-outside-box',
    name: 'Chỉ được sút trong vòng cấm',
    // description: 'Not allowed to shoot from outside the penalty area',
    description: '',
  },
  // {
  //   id: 'first-touch-only',
  //   name: 'First Touch Only',
  //   description: 'Must pass or shoot on first touch, no dribbling',
  // },
  // {
  //   id: 'no-skill-moves',
  //   name: 'No Skill Moves',
  //   description: 'Not allowed to use skill moves or tricks',
  // },
  // {
  //   id: 'weak-foot-only',
  //   name: 'Weak Foot Only',
  //   description: 'Can only use weak foot for shooting and passing',
  // },
  // {
  //   id: 'no-pressing',
  //   name: 'No Pressing',
  //   description: 'Not allowed to use team pressing or high press tactics',
  // },
  // {
  //   id: 'no-counter-attacks',
  //   name: 'No Counter Attacks',
  //   description: 'Must build up play slowly, no fast breaks',
  // },
];
