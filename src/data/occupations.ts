import softwareEngineerHero from '../assets/software-engineer-hero.png'

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
  heroImage: string
  risks: Risk[]
  exercises: Exercise[]
}

export const occupations: Occupation[] = [
  {
    id: 'accountant',
    name: 'Accountant',
    shortDescription: 'Desk work with reports and spreadsheets.',
    heroImage: softwareEngineerHero,
    risks: [
      {
        title: 'Neck Stiffness',
        description:
          'Screens can make your neck tight.',
      },
      {
        title: 'Lower Back Pain',
        description:
          'Sitting too long can make your lower back sore.',
      },
      {
        title: 'Tired Eyes',
        description:
          'Reports and spreadsheets can tire your eyes.',
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
        benefit: 'Gives your eyes a short break from screen time.',
        instructions: [
          'Every 20 minutes, look away from your screen.',
          'Focus on something about 20 feet away.',
          'Keep looking for 20 seconds.',
          'Blink a few times before returning to work.',
        ],
      },
    ],
  },
  {
    id: 'chef',
    name: 'Chef',
    shortDescription: 'Kitchen work with standing and repeated tasks.',
    heroImage: softwareEngineerHero,
    risks: [
      {
        title: 'Sore Wrists',
        description:
          'Chopping and stirring can make wrists sore.',
      },
      {
        title: 'Tired Lower Back',
        description:
          'Long shifts can make your lower back tired.',
      },
      {
        title: 'Shoulder Tightness',
        description:
          'Prep work can make your shoulders tight.',
      },
    ],
    exercises: [
      {
        name: 'Cross-Body Arm Stretch',
        duration: '2 minutes',
        benefit: 'Helps sore wrists and arms after chopping and prep work.',
        instructions: [
          'Extend one arm forward with the palm down.',
          'Use your other hand to gently bend your wrist down.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Standing Hamstring Stretch',
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
    heroImage: softwareEngineerHero,
    risks: [
      {
        title: 'Sore Lower Back',
        description:
          'Lifting patients can make your back sore.',
      },
      {
        title: 'Tired Legs',
        description:
          'Hard floors can make your legs tired.',
      },
      {
        title: 'Tight Shoulders',
        description:
          'Reaching often can make shoulders tight.',
      },
    ],
    exercises: [
      {
        name: 'Standing Hip Stretch',
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
          'Stand tall again and repeat slowly.',
        ],
      },
    ],
  },
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    shortDescription: 'Desk-based computer work for long hours.',
    heroImage: softwareEngineerHero,
    risks: [
      {
        title: 'Neck Pain',
        description:
          'Screen time can make your neck sore.',
      },
      {
        title: 'Tired Eyes',
        description:
          'Long screen time can tire your eyes.',
      },
      {
        title: 'Sore Wrists',
        description:
          'Typing and mouse work can make wrists sore.',
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
        name: 'Wrist Stretches',
        duration: '2 minutes',
        benefit: 'Helps loosen tight wrists from typing and mouse use.',
        instructions: [
          'Extend one arm forward with your palm facing up.',
          'Use your other hand to gently pull your fingers back.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: '20-20-20 Eye Break',
        duration: '20 seconds',
        benefit: 'Gives your eyes a short break from screen time.',
        instructions: [
          'Every 20 minutes, look away from your screen.',
          'Focus on something about 20 feet away.',
          'Keep looking for 20 seconds.',
          'Blink a few times before returning to work.',
        ],
      },
    ],
  },
  {
    id: 'teacher',
    name: 'Teacher',
    shortDescription: 'Classroom work with standing, speaking, and planning.',
    heroImage: softwareEngineerHero,
    risks: [
      {
        title: 'Tired Voice',
        description:
          'Talking all day can tire your voice.',
      },
      {
        title: 'Sore Feet',
        description:
          'Standing can make feet and calves sore.',
      },
      {
        title: 'Upper Back Tightness',
        description:
          'Leaning forward can tighten your upper back.',
      },
    ],
    exercises: [
      {
        name: 'Belly Breathing',
        duration: '2 minutes',
        benefit: 'Helps your voice feel less tired.',
        instructions: [
          'Sit or stand with one hand on your belly.',
          'Breathe in through your nose and let your belly expand.',
          'Exhale slowly while keeping your shoulders relaxed.',
        ],
      },
      {
        name: 'Standing Calf Stretch',
        duration: '2 minutes',
        benefit: 'Helps sore lower legs from standing.',
        instructions: [
          'Place both hands against a wall.',
          'Step one foot back and press the heel toward the floor.',
          'Hold for 20 seconds, then switch sides.',
        ],
      },
      {
        name: 'Shoulder Blade Squeezes',
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
    heroImage: softwareEngineerHero,
    risks: [
      {
        title: 'Hip Stiffness',
        description:
          'Long drives can make hips stiff.',
      },
      {
        title: 'Sore Lower Back',
        description:
          'Driving for hours can make your back sore.',
      },
      {
        title: 'Heavy Legs',
        description:
          'Sitting can make your legs heavy.',
      },
    ],
    exercises: [
      {
        name: 'Seated Back Twists',
        duration: '1 minute',
        benefit: 'Helps your back move better after sitting.',
        instructions: [
          'Sit tall with both feet on the floor.',
          'Place one hand on the opposite thigh and gently turn your upper body.',
          'Hold briefly, return to center, and switch sides.',
        ],
      },
      {
        name: 'Standing Hip Stretch',
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
