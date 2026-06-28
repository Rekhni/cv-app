import { configureStore } from '@reduxjs/toolkit'
import educationReducer from '../features/education/educationSlice'
import skillsReducer from '../features/skills/skillsSlice'
import experienceReducer from '../features/experience/experienceSlice'
import portfolioReducer from '../features/portfolio/portfolioSlice'
import feedbacksReducer from '../features/feedbacks/feedbacksSlice'
import contactsReducer from '../features/contacts/contactsSlice'

export const store = configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
    experience: experienceReducer,
    portfolio: portfolioReducer,
    feedbacks: feedbacksReducer,
    contacts: contactsReducer
  }
})
