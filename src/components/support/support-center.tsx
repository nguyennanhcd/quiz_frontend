'use client'

import { HelpCategories } from './help-categories'
import { FAQSection } from './faq-section'
import { ContactForm } from './contact-form'
import { KnowledgeBase } from './knowledge-base'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function SupportCenter() {
  return (
    <div className='min-h-screen bg-transparent text-foreground mt-20'>
      {/* Header */}
      <div className='text-center px-4 mb-8'>
        <h1 className='text-3xl font-bold mb-4'>Support Center</h1>
        <p className='text-foreground/70 text-base max-w-2xl mx-auto'>
          Find answers to common questions or get in touch with our support team
        </p>
      </div>

      {/* Main Content */}
      <div className='px-4 pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-1'>
            <HelpCategories />
          </div>

          <div className='lg:col-span-3'>
            <Tabs defaultValue='faq' className='w-full'>
              <TabsList className='w-full justify-start overflow-x-auto bg-transparent border-b border-slate-700 mb-6'>
                <TabsTrigger
                  value='faq'
                  className='py-4 px-2 mr-6 data-[state=active]:border-b-2 data-[state=active]:border-default data-[state=active]:text-foreground data-[state=inactive]:text-foreground/70'
                >
                  Frequently Asked Questions
                </TabsTrigger>
                <TabsTrigger
                  value='contact'
                  className='py-4 px-2 mr-6 data-[state=active]:border-b-2 data-[state=active]:border-default data-[state=active]:text-foreground data-[state=inactive]:text-foreground/70'
                >
                  Contact Support
                </TabsTrigger>
                <TabsTrigger
                  value='knowledge'
                  className='py-4 px-2 data-[state=active]:border-b-2 data-[state=active]:border-default data-[state=active]:text-foreground data-[state=inactive]:text-foreground/70'
                >
                  Knowledge Base
                </TabsTrigger>
              </TabsList>

              <TabsContent value='faq'>
                <FAQSection />
              </TabsContent>
              <TabsContent value='contact'>
                <ContactForm />
              </TabsContent>
              <TabsContent value='knowledge'>
                <KnowledgeBase />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
