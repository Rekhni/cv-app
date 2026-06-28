import { createServer } from 'miragejs'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { getStoredSkills } from '../utils/skillsStorage'

const initialSkills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 88 },
  { name: 'REST APIs', level: 85 },
  { name: 'Responsive Design / UI-UX', level: 85 },
  { name: 'Git', level: 85 },
  { name: 'Node.js', level: 78 },
  { name: 'Firebase', level: 75 },
  { name: 'SQL', level: 72 },
  { name: 'GraphQL', level: 65 },
  { name: 'Python', level: 60 },
  { name: 'Java', level: 58 },
  { name: 'C# / .NET', level: 55 },
  { name: 'WordPress', level: 55 }
]

export default function makeServer() {
  let skills = getStoredSkills() ?? [...initialSkills]

  createServer({
    routes() {
      this.get('/api/educations', () => ({
              educations: [
                {
                  date: 2025,
                  title: 'Commercial Software Development — JavaScript',
                  text: 'Itransition Group. Certificate in commercial JavaScript software development.'
                },
                {
                  date: 2024,
                  title: 'Certificate in Application Programming',
                  text: 'UCLA Extension. September 2023 – June 2024.'
                },
                {
                  date: 2023,
                  title: 'Master of Science in Computer Science',
                  text: 'Washington State University. September 2022 – June 2023.'
                },
                {
                  date: 2021,
                  title: 'Bachelor of Science in Computer Science',
                  text: 'L.N. Gumilyov Eurasian National University. September 2017 – June 2021.'
                }
              ]
       }))

      this.get('/api/skills', () => ({
        skills
      }))

      this.post('/api/skills', (_, request) => {
        const skill = JSON.parse(request.requestBody)
        skills = [...skills, skill]
        return { skills }
      })

      this.get('/api/experience', () => ({
        experience: [
            {
              date: 'Aug 2025 – Present',
              info: {
                company: 'Kazakhtelecom AO — Almaty, Kazakhstan (Remote)',
                job: 'Full-stack Developer',
                description:
                  'Developing an application that automatically generates annual planned preventive maintenance schedules for each work crew, improving time management and overall workflow efficiency.'
              }
            },
            {
              date: 'May 2025 – March 2026',
              info: {
                company: 'LLC “K.I.Satpayev Institute of Geological Sciences” — Almaty, Kazakhstan (Part-time)',
                job: 'Full-stack Developer',
                description:
                  'Developed a custom website for the institute and initiated an IT startup that utilizes exclusive archival geological data for AI model training, enabling faster and more cost-efficient exploration of new fields and deposits for subsoil users.'
              }
            },
            {
              date: 'Feb 2025 – Jun 2025',
              info: {
                company: 'iTransition Group — Minsk, Belarus',
                job: 'Intern Software Developer',
                description:
                  'Built responsive full-stack applications including a multi-language Form Builder (Google Forms clone), a collaborative presentation app, and a logic-based games collection using ReactJS, Node.js, MySQL, Firebase, and Express.js — featuring real-time collaboration, drag-and-drop form creation, authentication, analytics, and interactive game mechanics.'
              }
            },
            {
              date: 'Sep 2023 – Jan 2024',
              info: {
                company: 'Digital Connection — Digital Marketing Agency, Dubai, UAE',
                job: 'Intern Frontend Developer',
                description:
                  'Developed APIs, designed promotional materials boosting brand awareness by 34%, supported interns, and collaborated to resolve UI/UX issues under tight deadlines.'
              }
            },
            {
              date: 'Jun 2023 – Aug 2023',
              info: {
                company: 'Ministry of Digital Development, Innovations and Aerospace Industry — Astana, Kazakhstan',
                job: 'IT Startups Analyst Intern — IT Department',
                description:
                  'Collaborated with Astana Hub IT teams to enhance process efficiency and supported top IT projects’ promotion at Digital Bridge 2023 for potential financing and export.'
              }
            }
          ]
      }))

      this.get('/api/portfolio', () => ({
        portfolio: [
            {
              id: 'ign-kz',
              type: 'text',
              category: 'ui',
              title: 'IGN — Institute of Geological Sciences',
              text: 'Multi-page, multi-language website for the K.I. Satpayev Institute of Geological Sciences.',
              sourceUrl: 'https://ign.kz/'
            },
            {
              id: 'osekchat',
              type: 'text',
              category: 'code',
              title: 'OsekChat',
              text: 'WhatsApp-style messaging app where users can chat with each other in private conversations.',
              sourceUrl: 'https://osekchat-app.onrender.com/'
            },
            {
              id: 'customizable-forms',
              type: 'text',
              category: 'code',
              title: 'Customizable Forms App',
              text: 'Multi-language Form Builder (Google Forms clone) with drag-and-drop form creation, authentication, and analytics.',
              sourceUrl: 'https://customizable-forms-app.onrender.com/login'
            },
            {
              id: 'bring-it-up',
              type: 'text',
              category: 'code',
              title: 'Bring It Up',
              text: 'Online educational platform for interactive learning and content delivery.',
              sourceUrl: 'https://rekhni.github.io/bringItUpProject/#'
            },
            {
              id: 'instapro',
              type: 'text',
              category: 'code',
              title: 'Instapro',
              text: 'Instagram clone featuring post feed and like functionality, built with JavaScript and Bootstrap.',
              sourceUrl: 'https://rekhni.github.io/webdev-cw-instapro/'
            },
            {
              id: 'picture-art',
              type: 'text',
              category: 'ui',
              title: 'Picture.art',
              text: 'Responsive image gallery with filtering and preview functionality.',
              sourceUrl: 'https://rekhni.github.io/PictureProject/'
            },
            {
              id: 'comments-app',
              type: 'text',
              category: 'code',
              title: 'Comments App',
              text: 'Real-time comments app where users can post and like each other’s comments.',
              sourceUrl: 'https://rekhni.github.io/repo-github/'
            },
            {
              id: 'marvel-app',
              type: 'text',
              category: 'code',
              title: 'Marvel App',
              text: 'React application integrating the Marvel API to search and display superhero profiles.',
              sourceUrl: 'https://marvel-app-lemon-two.vercel.app/'
            },
            {
              id: 'wordpress-portfolio',
              type: 'text',
              category: 'ui',
              title: 'WordPress — Portfolio',
              text: 'Personal portfolio website built with WordPress.',
              sourceUrl: 'https://rekhni.com/'
            },
            {
              id: 'wordpress-travel-blog',
              type: 'text',
              category: 'ui',
              title: 'WordPress — Travel Blog',
              text: 'Travel blog website with custom theme and content management.',
              sourceUrl: 'https://blog.rekhni.com/'
            },
            {
              id: 'wordpress-corporate',
              type: 'text',
              category: 'ui',
              title: 'WordPress — Corporate',
              text: 'Corporate theme website for business presentation and services.',
              sourceUrl: 'https://corporatewebsite.rekhni.com/'
            },
            {
              id: 'wordpress-southquick',
              type: 'text',
              category: 'ui',
              title: 'WordPress — SouthQuick',
              text: 'eCommerce website built with WordPress and Elementor.',
              sourceUrl: 'https://ecommerce.rekhni.com/shop/'
            }
          ]
      }))

      this.get('/api/feedbacks', () => ({
        feedbacks: [
            {
              feedback:
                'Rakhymzhan consistently delivered clean, responsive interfaces and was quick to pick up new tools. His work on our multi-language form builder and real-time features was a strong contribution to the team.',
              reporter: {
                name: 'Alexey Volkov',
                photoUrl: 'https://i.pravatar.cc/80?img=12',
                citeUrl: 'iTransition Group'
              }
            },
            {
              feedback:
                'A reliable developer who communicates clearly and meets deadlines. He helped resolve UI/UX issues under tight timelines and his API work supported our marketing campaigns effectively.',
              reporter: {
                name: 'Sarah Al-Mansoori',
                photoUrl: 'https://i.pravatar.cc/80?img=5',
                citeUrl: 'Digital Connection'
              }
            },
            {
              feedback:
                'Rakhymzhan built our institute website from scratch with multi-page structure and multilingual support. He understood our requirements well and delivered a professional result we are proud to share.',
              reporter: {
                name: 'Dr. Yerlan Nurtayev',
                photoUrl: 'https://i.pravatar.cc/80?img=33',
                citeUrl: 'K.I. Satpayev Institute of Geological Sciences'
              }
            },
            {
              feedback:
                'Strong full-stack skills and a collaborative mindset. Rakhymzhan took ownership of complex scheduling logic and improved how our teams plan preventive maintenance workflows.',
              reporter: {
                name: 'Aidos Bekzhanov',
                photoUrl: 'https://i.pravatar.cc/80?img=68',
                citeUrl: 'Kazakhtelecom AO'
              }
            }
          ]
      }))

      this.get('/api/contacts', () => ({
        contacts: [
            {
              id: 'phone',
              icon: faPhone,
              title: '+7 708 828 9451',
              href: 'tel:+77088289451',
              external: false
            },
            {
              id: 'email',
              icon: faEnvelope,
              title: 'rahakuanyash1999@gmail.com',
              href: 'mailto:rahakuanyash1999@gmail.com',
              external: false
            },
            {
              id: 'linkedin',
              icon: faLinkedin,
              title: 'LinkedIn',
              subtitle: 'linkedin.com',
              href: 'https://www.linkedin.com/',
              external: true
            },
            {
              id: 'github',
              icon: faGithub,
              title: 'GitHub',
              subtitle: 'github.com',
              href: 'https://github.com/',
              external: true
            }
          ]
      }))
    }
  })
}
