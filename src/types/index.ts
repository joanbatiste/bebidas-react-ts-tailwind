import { z } from 'zod'
import { CateoriesApiResponseSchema, DrinkApiResponse, DrinksApiResponse, SearchFilterSchema, RecipeApiResponseSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CateoriesApiResponseSchema>
export type Drinks = z.infer<typeof DrinksApiResponse>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drink = z.infer<typeof DrinkApiResponse>
export type Recipe = z.infer<typeof RecipeApiResponseSchema>