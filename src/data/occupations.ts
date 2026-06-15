export type Exercise = {
  name: string
  duration: string
  benefit: string
  instructions: string[]
}

export type Risk = {
  title: string
  description: string
}

export type Occupation = {
  id: string
  name: string
  shortDescription: string
  risks: Risk[]
  exercises: Exercise[]
}

export const occupations: Occupation[] = [
  {
    id: 'accountant',
    name: 'Accountant',
    shortDescription: 'Desk-based financial work with reports and spreadsheets.',
    risks: [
      {
        title: 'Neck Stiffness',
        description:
          'Long periods of screen work and poor posture can lead to neck tension.',
      },
      {
        title: 'Lower Back Pain',
        description:
          'Extended sitting may contribute to lower back discomfort.',
      },
      {
        title: 'Eye Strain',
        description:
          'Reviewing spreadsheets and reports for long periods can fatigue the eyes.',
      },
    ],
    exercises: [
      {
        name: 'Chin Tucks',
        duration: '1 minute',
        benefit: 'Helps improve posture and reduce neck stiffness.',
        instructions: [
          'Sit upright.',
          'Pull your chin straight back.',
          'Hold briefly and repeat.',
        ],
      },
      {
        name: 'Seated Back Stretch',
        duration: '2 minutes',
        benefit: 'Relieves tension in the lower back.',
        instructions: [
          'Sit upright.',
          'Reach forward and gently round your back.',
          'Hold for 20 seconds and repeat.',
        ],
      },
      {
        name: '20-20-20 Eye Break',
        duration: '20 seconds',
        benefit: 'Reduces eye fatigue from screen use.',
        instructions: [
          'Every 20 minutes.',
          'Look at something 20 feet away.',
          'For at least 20 seconds.',
        ],
      },
    ],
  },
  {
    id: 'chef',
    name: 'Chef',
    shortDescription: 'Kitchen work with standing and repetitive tasks.',
    risks: [
      {
        title: 'Wrist Strain',
        description:
          'Chopping, stirring, and prep work can stress the wrists and forearms.',
      },
      {
        title: 'Lower Back Fatigue',
        description:
          'Standing for long kitchen shifts can tire the lower back.',
      },
      {
        title: 'Shoulder Tightness',
        description:
          'Repetitive prep and reaching can build tension around the shoulders.',
      },
    ],
    exercises: [
      {
        name: 'Forearm Stretches',
        duration: '2 minutes',
        benefit: 'Eases wrist and forearm strain from chopping and prep work.',
        instructions: [
          'Extend one arm forward with the palm down.',
          'Use the other hand to gently bend the wrist downward.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Hamstring Stretches',
        duration: '2 minutes',
        benefit: 'Helps reduce lower back fatigue after standing.',
        instructions: [
          'Place one heel on a low stable surface.',
          'Keep your back straight and hinge slightly at the hips.',
          'Hold for 20 seconds, then switch legs.',
        ],
      },
      {
        name: 'Shoulder Rolls',
        duration: '1 minute',
        benefit: 'Releases shoulder tightness from repetitive kitchen tasks.',
        instructions: [
          'Stand tall with your arms relaxed at your sides.',
          'Roll your shoulders slowly backward five times.',
          'Roll them forward five times and repeat as needed.',
        ],
      },
    ],
  },
  {
    id: 'nurse',
    name: 'Nurse',
    shortDescription: 'Clinical work with long shifts and patient care.',
    risks: [
      {
        title: 'Lower Back Strain',
        description:
          'Patient lifting and awkward positioning can overload the lower back.',
      },
      {
        title: 'Leg Fatigue',
        description:
          'Long shifts on hard floors can leave legs tired and circulation sluggish.',
      },
      {
        title: 'Shoulder Tension',
        description:
          'Patient handling and repeated reaching can tighten the shoulders.',
      },
    ],
    exercises: [
      {
        name: 'Hip Flexor Stretches',
        duration: '2 minutes',
        benefit: 'Eases hip tightness from walking, lifting, and long shifts.',
        instructions: [
          'Step one foot forward into a short lunge stance.',
          'Keep your torso upright and gently shift weight forward.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Calf Raises',
        duration: '1 minute',
        benefit: 'Supports circulation and reduces lower-leg fatigue.',
        instructions: [
          'Stand near a wall or counter for balance.',
          'Rise onto the balls of your feet.',
          'Lower slowly and repeat at a steady pace.',
        ],
      },
      {
        name: 'Gentle Back Extensions',
        duration: '1 minute',
        benefit: 'Helps counter forward bending and lower back strain.',
        instructions: [
          'Stand with your hands resting on your lower back.',
          'Gently lean backward within a comfortable range.',
          'Return to neutral and repeat slowly.',
        ],
      },
    ],
  },
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    shortDescription: 'Desk-based computer work for long hours.',
    risks: [
      {
        title: 'Neck Pain',
        description:
          'Common neck and shoulder tension from prolonged sitting and screen focus.',
      },
      {
        title: 'Eye Strain',
        description:
          'Visual fatigue from long periods of close screen work and reduced blinking.',
      },
      {
        title: 'Wrist Discomfort',
        description:
          'Repetitive typing and mouse use can irritate the wrists and forearms.',
      },
    ],
    exercises: [
      {
        name: 'Chin Tucks',
        duration: '1 minute',
        benefit: 'Helps reduce forward-head posture and neck tension.',
        instructions: [
          'Sit tall with your shoulders relaxed.',
          'Gently draw your chin straight back without tilting your head.',
          'Hold for 3 seconds, then release and repeat.',
        ],
      },
      {
        name: 'Wrist Flexor Stretches',
        duration: '2 minutes',
        benefit: 'Relieves tightness from typing and mouse use.',
        instructions: [
          'Extend one arm forward with your palm facing up.',
          'Use your other hand to gently pull the fingers back.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Screen Break Eye Focusing',
        duration: '1 minute',
        benefit: 'Reduces eye fatigue from sustained screen time.',
        instructions: [
          'Look at an object about 20 feet away.',
          'Keep your gaze relaxed for 20 seconds.',
          'Blink slowly several times before returning to the screen.',
        ],
      },
    ],
  },
  {
    id: 'teacher',
    name: 'Teacher',
    shortDescription: 'Classroom work with standing, speaking, and planning.',
    risks: [
      {
        title: 'Voice Strain',
        description:
          'Frequent speaking over classroom noise can fatigue the voice.',
      },
      {
        title: 'Foot Fatigue',
        description:
          'Standing through lessons can create soreness in the feet and calves.',
      },
      {
        title: 'Upper Back Tightness',
        description:
          'Desk work, grading, and leaning forward can tighten the upper back.',
      },
    ],
    exercises: [
      {
        name: 'Diaphragmatic Breathing',
        duration: '2 minutes',
        benefit: 'Supports voice control and reduces throat strain.',
        instructions: [
          'Sit or stand with one hand on your abdomen.',
          'Inhale through your nose and let your abdomen expand.',
          'Exhale slowly while keeping your shoulders relaxed.',
        ],
      },
      {
        name: 'Standing Calf Stretches',
        duration: '2 minutes',
        benefit: 'Relieves lower-leg tension from standing in class.',
        instructions: [
          'Place both hands against a wall.',
          'Step one foot back and press the heel toward the floor.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Scapular Squeezes',
        duration: '1 minute',
        benefit: 'Reduces upper back tightness from grading and desk work.',
        instructions: [
          'Sit or stand tall with arms relaxed.',
          'Gently squeeze your shoulder blades together.',
          'Hold for 3 seconds, release, and repeat.',
        ],
      },
    ],
  },
  {
    id: 'truck-driver',
    name: 'Truck Driver',
    shortDescription: 'Long-distance driving with extended sitting.',
    risks: [
      {
        title: 'Hip Stiffness',
        description:
          'Extended sitting can shorten hip flexors and limit comfortable movement.',
      },
      {
        title: 'Lower Back Discomfort',
        description:
          'Long driving periods can place sustained pressure on the lower back.',
      },
      {
        title: 'Poor Leg Circulation',
        description:
          'Remaining seated for hours can slow circulation through the legs.',
      },
    ],
    exercises: [
      {
        name: 'Seated Spinal Twists',
        duration: '1 minute',
        benefit: 'Improves back mobility after long periods of sitting.',
        instructions: [
          'Sit tall with both feet on the floor.',
          'Place one hand on the opposite thigh and gently rotate.',
          'Hold briefly, return to center, and switch sides.',
        ],
      },
      {
        name: 'Hip Flexor Stretches',
        duration: '2 minutes',
        benefit: 'Reduces hip stiffness caused by extended driving.',
        instructions: [
          'Stand in a short lunge stance during a safe stop.',
          'Keep your torso upright and shift your hips forward gently.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Ankle Pumps',
        duration: '1 minute',
        benefit: 'Encourages circulation in the lower legs.',
        instructions: [
          'Sit with both feet on the floor.',
          'Lift your toes up while keeping heels down.',
          'Point your toes down, then repeat at a steady pace.',
        ],
      },
    ],
  },
]
