import { useState } from 'react'
import ExerciseIllustration from './components/ExerciseIllustration'
import { occupations } from './data/occupations'

function App() {
  const [selectedOccupationId, setSelectedOccupationId] = useState(
    'accountant',
  )
  const [expandedExerciseName, setExpandedExerciseName] =
    useState('Chin Tucks')

  const selectedOccupation =
    occupations.find((occupation) => occupation.id === selectedOccupationId) ??
    occupations[0]

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950 sm:py-20">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Workplace wellness
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Occupation Health Check
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Discover common occupational health risks and preventive exercises.
        </p>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {occupations.map((occupation) => (
          <button
            aria-pressed={occupation.id === selectedOccupationId}
            className={`rounded-lg border bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 ${
              occupation.id === selectedOccupationId
                ? 'border-teal-600 ring-2 ring-teal-600 ring-offset-2'
                : 'border-slate-200'
            }`}
            key={occupation.id}
            onClick={() => {
              setSelectedOccupationId(occupation.id)
              setExpandedExerciseName(occupation.exercises[0].name)
            }}
            type="button"
          >
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              {occupation.name}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              {occupation.shortDescription}
            </p>
          </button>
        ))}
      </section>

      <section className="mx-auto mt-10 max-w-6xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Occupation details
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
            {selectedOccupation.name}
          </h2>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Common Risks
            </h3>
            <div className="mt-4 space-y-3">
              {selectedOccupation.risks.map((risk) => (
                <article
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                  key={risk.title}
                >
                  <h4 className="font-semibold text-slate-950">
                    {risk.title}
                  </h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    {risk.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Recommended Exercises
            </h3>
            <div className="mt-4 space-y-3">
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
                      {exercise.name === expandedExerciseName ? 'Hide' : 'View'}
                    </span>
                  </button>

                  {exercise.name === expandedExerciseName && (
                    <div className="space-y-6 px-4 py-5 text-slate-700 sm:px-5">
                      <ExerciseIllustration exerciseName={exercise.name} />

                      <div className="grid gap-4 sm:grid-cols-[0.45fr_1fr]">
                        <div className="rounded-lg bg-slate-50 p-4">
                          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                            Duration
                          </p>
                          <p className="mt-2 font-medium text-slate-950">
                            {exercise.duration}
                          </p>
                        </div>
                        <div className="rounded-lg bg-slate-50 p-4">
                          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                            Benefit
                          </p>
                          <p className="mt-2 leading-7">{exercise.benefit}</p>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Step-by-step instructions
                        </p>
                        <ol className="mt-3 list-decimal space-y-2 pl-5">
                          {exercise.instructions.map((instruction) => (
                            <li key={instruction}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl rounded-lg border border-teal-200 bg-teal-50 p-6 text-center shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          Don't see your occupation?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">
          Help us decide which occupations to add next. Suggest an occupation
          and share common physical issues associated with it.
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
