import { test, expect } from '@playwright/test'

test('Check user not found error', async ({ request }) => {
  const newIssue = await request.post('https://demoqa.com/Account/v1/Authorized', {
    data: {
      userName: 'maksimenko',
      password: 'eifrjdf77'
    }
  })
  expect(newIssue.ok()).toBeFalsy()
  expect(newIssue.statusText()).toBe('Not Found')
  expect(newIssue.status()).toBe(404)
})

test('Check amount of books in v1/Books', async ({ request }) => {
  const newIssue = await request.get('https://demoqa.com/BookStore/v1/Books')
  expect(newIssue.body()).toBeDefined()
  const books = JSON.parse((await newIssue.body()).toString())
  expect(books.books.length).toEqual(8)
})