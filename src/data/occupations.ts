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
          'Looking at a screen for a long time can make your neck feel tight.',
      },
      {
        title: 'Lower Back Pain',
        description:
          'Sitting for a long time can make your lower back feel sore.',
      },
      {
        title: 'Tired Eyes',
        description:
          'Reading spreadsheets and reports for hours can give you tired eyes.',
      },
    ],
    exercises: [
      {
        name: 'Chin Tucks',
        duration: '1 minute',
        benefit: 'Helps you sit taller and eases a stiff neck.',
        instructions: [
          'Sit upright.',
          'Pull your chin straight back.',
          'Hold briefly and repeat.',
        ],
      },
      {
        name: 'Seated Back Stretch',
        duration: '2 minutes',
        benefit: 'Helps loosen a sore lower back.',
        instructions: [
          'Sit upright.',
          'Reach forward and gently round your back.',
          'Hold for 20 seconds and repeat.',
        ],
      },
      {
        name: '20-20-20 Eye Break',
        duration: '20 seconds',
        benefit: 'Helps tired eyes from screen time.',
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
    shortDescription: 'Kitchen work with standing and repeated tasks.',
    risks: [
      {
        title: 'Sore Wrists',
        description:
          'Chopping and stirring for hours can make your wrists and arms sore.',
      },
      {
        title: 'Tired Lower Back',
        description:
          'Standing for long shifts can make your lower back feel tired.',
      },
      {
        title: 'Shoulder Tightness',
        description:
          'Doing the same prep work for hours can make your shoulders tight.',
      },
    ],
    exercises: [
      {
        name: 'Forearm Stretches',
        duration: '2 minutes',
        benefit: 'Helps sore wrists and arms after chopping and prep work.',
        instructions: [
          'Extend one arm forward with the palm down.',
          'Use your other hand to gently bend your wrist down.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Hamstring Stretches',
        duration: '2 minutes',
        benefit: 'Helps your lower back feel better after standing.',
        instructions: [
          'Place one heel on a low, steady surface.',
          'Keep your back straight and hinge slightly at the hips.',
          'Hold for 20 seconds, then switch legs.',
        ],
      },
      {
        name: 'Shoulder Rolls',
        duration: '1 minute',
        benefit: 'Helps loosen tight shoulders after kitchen work.',
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
        title: 'Sore Lower Back',
        description:
          'Lifting and helping patients can make your lower back sore.',
      },
      {
        title: 'Tired Legs',
        description:
          'Long shifts on hard floors can leave your legs tired.',
      },
      {
        title: 'Tight Shoulders',
        description:
          'Helping patients and reaching often can make your shoulders tight.',
      },
    ],
    exercises: [
      {
        name: 'Hip Flexor Stretches',
        duration: '2 minutes',
        benefit: 'Helps loosen tight hips after walking and long shifts.',
        instructions: [
          'Step one foot forward into a small lunge.',
          'Keep your upper body upright and gently shift weight forward.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Calf Raises',
        duration: '1 minute',
        benefit: 'Helps tired lower legs feel better.',
        instructions: [
          'Stand near a wall or counter for balance.',
          'Rise onto the balls of your feet.',
          'Lower slowly and repeat at a steady pace.',
        ],
      },
      {
        name: 'Gentle Back Extensions',
        duration: '1 minute',
        benefit: 'Helps your lower back after bending forward.',
        instructions: [
          'Stand with your hands resting on your lower back.',
          'Gently lean back only as far as feels comfortable.',
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
          'Sitting and looking at a screen for hours can make your neck sore.',
      },
      {
        title: 'Tired Eyes',
        description:
          'Long screen time and less blinking can lead to tired eyes.',
      },
      {
        title: 'Sore Wrists',
        description:
          'Typing and using a mouse for hours can make your wrists sore.',
      },
    ],
    exercises: [
      {
        name: 'Chin Tucks',
        duration: '1 minute',
        benefit: 'Helps your neck feel better after screen time.',
        instructions: [
          'Sit tall and relax your shoulders.',
          'Gently pull your chin straight back without tilting your head.',
          'Hold for 3 seconds, then release and repeat.',
        ],
      },
      {
        name: 'Wrist Flexor Stretches',
        duration: '2 minutes',
        benefit: 'Helps loosen tight wrists from typing and mouse use.',
        instructions: [
          'Extend one arm forward with your palm facing up.',
          'Use your other hand to gently pull the fingers back.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Screen Break Eye Focusing',
        duration: '1 minute',
        benefit: 'Helps tired eyes from long screen time.',
        instructions: [
          'Look at an object about 20 feet away.',
          'Look at it calmly for 20 seconds.',
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
        title: 'Tired Voice',
        description:
          'Talking for long periods can make your voice tired.',
      },
      {
        title: 'Sore Feet',
        description:
          'Standing during lessons can make your feet and calves sore.',
      },
      {
        title: 'Upper Back Tightness',
        description:
          'Grading and leaning forward can make your upper back tight.',
      },
    ],
    exercises: [
      {
        name: 'Diaphragmatic Breathing',
        duration: '2 minutes',
        benefit: 'Helps your voice feel less tired.',
        instructions: [
          'Sit or stand with one hand on your belly.',
          'Breathe in through your nose and let your belly expand.',
          'Exhale slowly while keeping your shoulders relaxed.',
        ],
      },
      {
        name: 'Standing Calf Stretches',
        duration: '2 minutes',
        benefit: 'Helps sore lower legs from standing.',
        instructions: [
          'Place both hands against a wall.',
          'Step one foot back and press the heel toward the floor.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Scapular Squeezes',
        duration: '1 minute',
        benefit: 'Helps loosen a tight upper back.',
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
    shortDescription: 'Long-distance driving with lots of sitting.',
    risks: [
      {
        title: 'Hip Stiffness',
        description:
          'Sitting for a long time can make your hips feel stiff.',
      },
      {
        title: 'Sore Lower Back',
        description:
          'Driving for hours can make your lower back sore.',
      },
      {
        title: 'Heavy Legs',
        description:
          'Sitting for hours can make your legs feel heavy or tired.',
      },
    ],
    exercises: [
      {
        name: 'Seated Spinal Twists',
        duration: '1 minute',
        benefit: 'Helps your back move better after sitting.',
        instructions: [
          'Sit tall with both feet on the floor.',
          'Place one hand on the opposite thigh and gently rotate.',
          'Hold briefly, return to center, and switch sides.',
        ],
      },
      {
        name: 'Hip Flexor Stretches',
        duration: '2 minutes',
        benefit: 'Helps loosen stiff hips after driving.',
        instructions: [
          'Stand in a small lunge during a safe stop.',
          'Keep your upper body upright and shift your hips forward gently.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Ankle Pumps',
        duration: '1 minute',
        benefit: 'Helps your lower legs feel less heavy.',
        instructions: [
          'Sit with both feet on the floor.',
          'Lift your toes up while keeping heels down.',
          'Point your toes down, then repeat at a steady pace.',
        ],
      },
    ],
  },
]
