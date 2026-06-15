import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bone,
  Eye,
  Footprints,
  Hand,
  HandMetal,
  Monitor,
  MoveHorizontal,
  PersonStanding,
  RotateCcw,
  ScanFace,
  StretchHorizontal,
  UserRound,
  Wind,
  type LucideIcon,
} from 'lucide-react'

type IllustrationType =
  | 'chin-tucks'
  | 'wrist-flexor-stretches'
  | 'eye-focusing'
  | 'hip-flexor-stretches'
  | 'calf-raises'
  | 'back-extensions'
  | 'seated-back-stretch'
  | 'diaphragmatic-breathing'
  | 'calf-stretches'
  | 'scapular-squeezes'
  | 'forearm-stretches'
  | 'hamstring-stretches'
  | 'shoulder-rolls'
  | 'spinal-twists'
  | 'ankle-pumps'

type ExerciseIllustrationProps = {
  exerciseName: string
  illustrationType?: IllustrationType
}

const illustrationTypeByExerciseName: Record<string, IllustrationType> = {
  'Chin Tucks': 'chin-tucks',
  'Wrist Stretches': 'wrist-flexor-stretches',
  'Screen Break Eye Focusing': 'eye-focusing',
  '20-20-20 Eye Break': 'eye-focusing',
  'Hip Stretches': 'hip-flexor-stretches',
  'Calf Raises': 'calf-raises',
  'Gentle Back Extensions': 'back-extensions',
  'Seated Back Stretch': 'seated-back-stretch',
  'Belly Breathing': 'diaphragmatic-breathing',
  'Standing Calf Stretches': 'calf-stretches',
  'Shoulder Blade Squeezes': 'scapular-squeezes',
  'Arm Stretches': 'forearm-stretches',
  'Hamstring Stretches': 'hamstring-stretches',
  'Shoulder Rolls': 'shoulder-rolls',
  'Seated Back Twists': 'spinal-twists',
  'Ankle Pumps': 'ankle-pumps',
}

const iconMap: Record<IllustrationType, [LucideIcon, LucideIcon]> = {
  'chin-tucks': [UserRound, ArrowLeft],
  'wrist-flexor-stretches': [Hand, ArrowRight],
  'eye-focusing': [Monitor, Eye],
  'hip-flexor-stretches': [PersonStanding, StretchHorizontal],
  'calf-raises': [Footprints, ArrowUp],
  'back-extensions': [Bone, ArrowUp],
  'seated-back-stretch': [Bone, StretchHorizontal],
  'diaphragmatic-breathing': [Wind, Activity],
  'calf-stretches': [Footprints, StretchHorizontal],
  'scapular-squeezes': [ScanFace, MoveHorizontal],
  'forearm-stretches': [HandMetal, StretchHorizontal],
  'hamstring-stretches': [PersonStanding, StretchHorizontal],
  'shoulder-rolls': [UserRound, RotateCcw],
  'spinal-twists': [PersonStanding, RotateCcw],
  'ankle-pumps': [Footprints, ArrowUp],
}

function IconIllustration({
  illustrationType,
}: {
  illustrationType: IllustrationType
}) {
  const [PrimaryIcon, SecondaryIcon] = iconMap[illustrationType]

  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-4 text-teal-800"
    >
      <PrimaryIcon className="h-11 w-11 stroke-[1.75]" />
      <SecondaryIcon className="h-8 w-8 stroke-[1.75]" />
      {illustrationType === 'eye-focusing' && (
        <span className="text-sm font-bold tracking-wide">20-20-20</span>
      )}
    </div>
  )
}

function PlaceholderIllustration({ exerciseName }: { exerciseName: string }) {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-teal-900">{exerciseName}</p>
      <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-teal-700">
        Illustration
      </p>
    </div>
  )
}

function ExerciseIllustration({
  exerciseName,
  illustrationType,
}: ExerciseIllustrationProps) {
  const resolvedType =
    illustrationType ?? illustrationTypeByExerciseName[exerciseName]

  return (
    <div className="flex h-24 w-full items-center justify-center rounded-lg border border-dashed border-teal-300 bg-teal-50 px-6 text-teal-800 md:h-32">
      {resolvedType && <IconIllustration illustrationType={resolvedType} />}
      {!resolvedType && <PlaceholderIllustration exerciseName={exerciseName} />}
    </div>
  )
}

export default ExerciseIllustration
