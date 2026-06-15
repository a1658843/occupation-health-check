import { useEffect, useRef, useState } from 'react'
import ExerciseIllustration from './components/ExerciseIllustration'
import { occupations } from './data/occupations'
import accountantImage from './assets/hero/accountant.png'
import chefImage from './assets/hero/chef.png'
import nurseImage from './assets/hero/nurse.png'
import softwareEngineerImage from './assets/hero/software-engineer.png'
import teacherImage from './assets/hero/teacher.png'
import truckDriverImage from './assets/hero/truck-driver.png'

const occupationHeroImages: Record<string, string> = {
  Accountant: accountantImage,
  'Software Engineer': softwareEngineerImage,
  Nurse: nurseImage,
  Teacher: teacherImage,
  Chef: chefImage,
  'Truck Driver': truckDriverImage,
}

const exerciseImageByName: Record<string, string> = {
  'Chin Tucks': '/exercises/Chin Tucks.png',
  'Seated Back Stretch': '/exercises/Seated Back Stretch.png',
  'Wrist Stretch': '/exercises/Wrist Stretch.png',
  'Wrist Stretches': '/exercises/Wrist Stretch.png',
  '20-20-20 Eye Break': '/exercises/20-20-20 Eye Break.png',
  'Standing Hip Stretch': '/exercises/Standing Hip Stretch.png',
  'Calf Raises': '/exercises/Calf Raises.png',
  'Gentle Back Extension': '/exercises/Gentle Back Extension.png',
  'Gentle Back Extensions': '/exercises/Gentle Back Extension.png',
  'Seated Back Twist': '/exercises/Seated Back Twist.png',
  'Seated Back Twists': '/exercises/Seated Back Twist.png',
  'Ankle Pumps': '/exercises/Ankle Pumps.png',
  'Belly Breathing': '/exercises/Belly Breathing.png',
  'Standing Calf Stretch': '/exercises/Standing Calf Stretch.png',
  'Shoulder Blade Squeezes': '/exercises/Shoulder Blade Squeezes.png',
  'Cross-Body Arm Stretch': '/exercises/Cross-Body Arm Stretch.png',
  'Standing Hamstring Stretch': '/exercises/Standing Hamstring Stretch.png',
  'Shoulder Rolls': '/exercises/Shoulder Rolls.png',
}

function App() {
  const [selectedOccupationId, setSelectedOccupationId] = useState<
    string | null
  >(null)
  const [expandedExerciseName, setExpandedExerciseName] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const heroSectionRef = useRef<HTMLElement>(null)
  const detailsSectionRef = useRef<HTMLElement>(null)

  const selectedOccupation = occupations.find(
    (occupation) => occupation.id === selectedOccupationId,
  )
  const selectedExercise = selectedOccupation?.exercises.find(
    (exercise) => exercise.name === expandedExerciseName,
  )
  const selectedExerciseImage = selectedExercise
    ? exerciseImageByName[selectedExercise.name]
    : undefined
  const selectedOccupationImage = selectedOccupation
    ? occupationHeroImages[selectedOccupation.name] ?? softwareEngineerImage
    : null
  const normalizedSearchQuery = searchQuery.trim().toLowerCase()
  const shouldShowSearchDropdown =
    normalizedSearchQuery &&
    searchQuery.trim() !== selectedOccupation?.name
  const matchingOccupations = normalizedSearchQuery
    ? occupations.filter((occupation) =>
        occupation.name.toLowerCase().includes(normalizedSearchQuery),
      )
    : []
  const popularOccupationNames = [
    'Accountant',
    'Software Engineer',
    'Nurse',
    'Teacher',
    'Chef',
    'Truck Driver',
  ]
  const popularOccupations = popularOccupationNames
    .map((occupationName) =>
      occupations.find((occupation) => occupation.name === occupationName),
    )
    .filter((occupation) => occupation !== undefined)

  const healthTipsTitleByOccupation: Record<string, string> = {
    Accountant: 'Health Tips for Accountants',
    Chef: 'Health Tips for Chefs',
    Nurse: 'Health Tips for Nurses',
    'Software Engineer': 'Health Tips for Software Engineers',
    Teacher: 'Health Tips for Teachers',
    'Truck Driver': 'Health Tips for Truck Drivers',
  }

  const handleOccupationSelect = (occupation: (typeof occupations)[number]) => {
    setSelectedOccupationId(occupation.id)
    setExpandedExerciseName('')
    setSearchQuery(occupation.name)
  }

  useEffect(() => {
    Object.values(occupationHeroImages).forEach((heroImage) => {
      const image = new Image()
      image.src = heroImage
    })
  }, [])

  const handleClearSelection = () => {
    setSelectedOccupationId(null)
    setExpandedExerciseName('')
    setSearchQuery('')
    requestAnimationFrame(() => {
      heroSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950 md:py-20">
      <section
        className="mx-auto max-w-3xl scroll-mt-6 text-center"
        ref={heroSectionRef}
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Body Relief for Every Job
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 md:mt-6 md:text-lg md:leading-8">
          Find stretches that help prevent neck, back, wrist, and eye strain.
        </p>

        <div className="relative mx-auto mt-4 max-w-[720px] md:mt-6">
          <label className="sr-only" htmlFor="occupation-search">
            Search your occupation
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-5 py-4 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
            id="occupation-search"
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="What do you do for work?"
            type="search"
            value={searchQuery}
          />

          {shouldShowSearchDropdown && (
            <div className="absolute left-0 right-0 z-10 mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
              {matchingOccupations.length > 0 ? (
                matchingOccupations.map((occupation) => (
                  <button
                    className="flex w-full flex-col px-4 py-3 text-left transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600"
                    key={occupation.id}
                    onClick={() => handleOccupationSelect(occupation)}
                    type="button"
                  >
                    <span className="font-semibold text-slate-950">
                      {occupation.name}
                    </span>
                    <span className="mt-1 text-sm leading-6 text-slate-600">
                      {occupation.shortDescription}
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-slate-600">
                  No match found.{' '}
                  <a
                    className="font-semibold text-teal-700 underline-offset-4 hover:underline"
                    href="https://tally.so/r/xX60AG"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Suggest this occupation.
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {!selectedOccupation && (
        <section className="mx-auto mt-6 max-w-3xl md:mt-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Popular occupations
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {popularOccupations.map((occupation) => (
                <button
                  aria-pressed={occupation.id === selectedOccupationId}
                  className={`rounded-lg border bg-white px-4 py-3 text-left font-semibold shadow-sm transition duration-200 md:hover:-translate-y-[3px] md:hover:border-teal-300 md:hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 ${
                    occupation.id === selectedOccupationId
                      ? 'border-teal-600 ring-2 ring-teal-600 ring-offset-2'
                      : 'border-slate-200'
                  }`}
                  key={occupation.id}
                  onClick={() => handleOccupationSelect(occupation)}
                  type="button"
                >
                  {occupation.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedOccupation && (
        <>
          {selectedOccupation && (
            <div className="mx-auto mt-4 flex max-w-3xl justify-center md:mt-6">
              <div className="relative min-h-[220px] w-full max-w-[440px] overflow-hidden rounded-lg shadow-sm md:min-h-[260px]">
                {Object.entries(occupationHeroImages).map(
                  ([occupationName, occupationImage]) => (
                    <img
                      alt={`${occupationName} stretching at work`}
                      className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ease-in-out ${
                        occupationImage === selectedOccupationImage
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                      key={occupationName}
                      src={occupationImage}
                    />
                  ),
                )}
              </div>
            </div>
          )}

          <section
            className="mx-auto mt-6 max-w-6xl scroll-mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:mt-8"
            ref={detailsSectionRef}
          >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Sore spots and simple stretches
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              {healthTipsTitleByOccupation[selectedOccupation.name] ??
                `Health Tips for ${selectedOccupation.name}s`}
            </h2>
            </div>
            <button
              className="self-start rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 transition hover:border-teal-300 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              onClick={handleClearSelection}
              type="button"
            >
              &larr; Back
            </button>
          </div>

          <div className="mt-6 grid gap-6 md:mt-8 md:gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Common Sore Spots
              </h3>
              <div className="mt-3 space-y-2 md:mt-4 md:space-y-3">
                {selectedOccupation.risks.map((risk) => (
                  <article
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                    key={risk.title}
                  >
                    <h4 className="font-semibold leading-6 text-slate-950">
                      {risk.title}
                    </h4>
                    <p className="mt-0.5 text-sm leading-5 text-slate-600">
                      {risk.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Simple Stretches
              </h3>
              <div className="mt-3 space-y-2 md:mt-4 md:space-y-3">
                {selectedOccupation.exercises.map((exercise) => (
                  <article
                    className="overflow-hidden rounded-lg border border-slate-200"
                    key={exercise.name}
                  >
                    <button
                      aria-expanded={exercise.name === expandedExerciseName}
                      className="flex w-full items-center justify-between gap-4 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-950 transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600"
                      onClick={() =>
                        setExpandedExerciseName((currentExerciseName) =>
                          currentExerciseName === exercise.name
                            ? ''
                            : exercise.name,
                        )
                      }
                      type="button"
                    >
                      <span>{exercise.name}</span>
                      <span className="text-sm text-teal-700">
                        {exercise.name === expandedExerciseName
                          ? 'Hide'
                          : 'Show'}
                      </span>
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              selectedExercise
                ? 'mt-6 grid-rows-[1fr] opacity-100 md:mt-8'
                : 'mt-0 grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              {selectedExercise && (
                <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                    Exercise Detail
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    {selectedExercise.name}
                  </h3>

                  {selectedExerciseImage && (
                    <img
                      alt={`${selectedExercise.name} instructional infographic`}
                      className="mx-auto mt-5 h-auto w-full max-w-[900px] rounded-xl border border-slate-200 shadow-sm md:mt-6"
                      src={selectedExerciseImage}
                    />
                  )}

                  <div className="mt-4 space-y-4 text-slate-700 md:mt-6 md:space-y-6">
                    {!selectedExerciseImage && (
                      <ExerciseIllustration
                        exerciseName={selectedExercise.name}
                      />
                    )}

                    <div className="rounded-lg bg-slate-50 p-3 md:p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Step-by-step instructions
                      </p>
                      <ol className="mt-3 list-decimal space-y-2 pl-5">
                        {selectedExercise.instructions.map((instruction) => (
                          <li key={instruction}>{instruction}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[0.45fr_1fr] md:gap-4">
                      <div className="rounded-lg bg-slate-50 p-3 md:p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Duration
                        </p>
                        <p className="mt-2 font-medium text-slate-950">
                          {selectedExercise.duration}
                        </p>
                      </div>
                      <div className="rounded-lg bg-slate-50 p-3 md:p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Benefit
                        </p>
                        <p className="mt-2 leading-7">
                          {selectedExercise.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
          </section>
        </>
      )}

      <section className="mx-auto mt-10 max-w-6xl rounded-lg border border-teal-200 bg-teal-50 p-6 text-center shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          Don't see your occupation?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">
          Help us decide which occupations to add next. Suggest an occupation
          and share common sore spots that come with it.
        </p>
        <a
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 sm:w-auto"
          href="https://tally.so/r/xX60AG"
          rel="noreferrer"
          target="_blank"
        >
          Suggest an Occupation
        </a>
      </section>
    </main>
  )
}

export default App
