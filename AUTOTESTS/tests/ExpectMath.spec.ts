import { test, expect } from '@playwright/test'
import { summury } from '../../lessons1/lessons1'
import { compareNumbers } from '../../lessons1/lessons1'
import { Student } from "../../lessons4/students"

test('Expect Math Formuls', () => {
expect(summury(10, 11)).toBeFalsy()

})

test('Expect Math compareNumbers', () => {
expect(compareNumbers()).toBeFalsy()

})

test('SetName', () => {
let student1: Student = new Student('Alesha', '555', 5, 1)
expect(student1.name).toEqual('Alesha')
student1.setName('ALex')
expect(student1.name).toEqual('ALex')
})