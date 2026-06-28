import avatar from '../assets/images/avatar.png'

export const PROFILE = {
    name: 'Rakhymzhan Kuanysh',
    title: 'Frontend Developer',
    description:
      'Frontend Developer with hands-on experience in React, REST APIs, and responsive design. Skilled in building scalable web solutions and contributing to product success through clean, efficient code.',
    avatar
}

export const ABOUT_TEXT =
  'Frontend Developer with hands-on experience in React, REST APIs, and responsive design. Skilled in building scalable web solutions, improving user experience, and contributing to product success through clean, efficient code and strong collaboration. Experienced in both corporate and startup environments, with additional background in digital analysis and teaching. Served as a teaching assistant for an artificial intelligence course at Washington State University for one year. Also experienced with Adobe Photoshop, Animate, Dreamweaver, and WordPress, and completed additional full-stack developer courses at GeekBrains and Skypro.'

export const EDUCATION_ERROR_MESSAGE =
  'Something went wrong; please review your server connection!'

export const SKILLS_STORAGE_KEY = 'cv-app-skills'

export const SKILL_RANGE_MIN = 10
export const SKILL_RANGE_MAX = 100

export const SKILL_FORM_ERRORS = {
  nameRequired: 'Skill name is a required field',
  levelNumber: "Skill range must be a 'number' type",
  levelMin: 'Skill range must be greater than or equal to 10',
  levelMax: 'Skill range must be less than or equal to 100'
}