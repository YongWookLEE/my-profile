import { Contact as ContactType } from '../types'

interface ContactProps {
  contact: ContactType
}

export default function Contact({ contact }: ContactProps) {
  const contactItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      ),
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'text-blue-600 hover:bg-blue-50'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.346.916 1.278 2.719 2.368 3.812.432.433.878.849 1.371 1.243l1.211-1.212a1 1 0 011.497.089l3.13 3.13a1 1 0 01.083 1.496l-1.907 1.908c-.944.944-2.554 1.236-3.848.261-3.716-2.802-6.874-6.076-8.281-10.21-.31-.78-.465-1.733-.265-2.677.2-.943 1.121-1.918 1.908-2.307l3.13-1.566a1 1 0 01.872.122z"></path>
        </svg>
      ),
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/-/g, '')}`,
      color: 'text-green-600 hover:bg-green-50'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'GitHub Profile',
      href: contact.github,
      color: 'text-gray-900 hover:bg-gray-100'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            연락처를 통해 언제든지 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'GitHub' ? '_blank' : undefined}
              rel={item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
              className={`group p-8 rounded-lg border-2 border-gray-200 transition-all duration-200 ${item.color}`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-current">
                {item.label}
              </h3>
              <p className="text-gray-600 group-hover:text-current break-all">
                {item.value}
              </p>
              <div className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label === 'GitHub' ? 'Visit Profile →' : 'Contact Now →'}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
