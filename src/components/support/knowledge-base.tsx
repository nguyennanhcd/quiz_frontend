export function KnowledgeBase() {
  return (
    <div className='bg-slate-800 rounded-lg p-8'>
      <h2 className='text-2xl font-bold mb-6'>Knowledge Base</h2>
      <p className='text-slate-300 mb-6'>
        Browse our comprehensive knowledge base for detailed guides, tutorials,
        and documentation.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-slate-700 rounded-lg p-6'>
          <h3 className='font-semibold mb-2'>Getting Started Guide</h3>
          <p className='text-slate-300 text-sm'>
            Learn the basics of using QuizHub
          </p>
        </div>
        <div className='bg-slate-700 rounded-lg p-6'>
          <h3 className='font-semibold mb-2'>Quiz Creation Tutorial</h3>
          <p className='text-slate-300 text-sm'>
            Step-by-step guide to creating quizzes
          </p>
        </div>
        <div className='bg-slate-700 rounded-lg p-6'>
          <h3 className='font-semibold mb-2'>Tournament Management</h3>
          <p className='text-slate-300 text-sm'>
            How to organize and run tournaments
          </p>
        </div>
        <div className='bg-slate-700 rounded-lg p-6'>
          <h3 className='font-semibold mb-2'>API Documentation</h3>
          <p className='text-slate-300 text-sm'>
            Technical documentation for developers
          </p>
        </div>
      </div>
    </div>
  )
}
