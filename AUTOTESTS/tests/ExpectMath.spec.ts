import { test, expect } from '@playwright/test'
import { summury } from '../../lessons1/lessons1'
import { compareNumbers } from '../../lessons1/lessons1'
import { chechSumSign } from '../../lessons1/lessons1'
import { printColor } from '../../lessons1/lessons1'
import { isPositive } from '../../lessons1/lessons1'
import { isNegative } from '../../lessons1/lessons1'
import { visokosGod } from '../../lessons1/lessons1'
import { massive } from '../../lessons1/lessons1'
import { cyrcleMassive } from '../../lessons1/lessons1'
import { doubleMassive } from '../../lessons1/lessons1'
import { Student } from "../../lessons4/students"

test('Expect Math Formuls', () => {
    expect(summury(10, 11)).toBeFalsy()
    expect(summury(9, 8)).toBeTruthy()
})

test('Expect Math compareNumbers', () => {
    expect(compareNumbers()).toBeFalsy()
})

test('chechSumSign', () => {
    expect(chechSumSign()).toBeTruthy()
})

test('printColor' , () => {
    expect(printColor(150)).toBe('green')
    expect(printColor(50)).toEqual('yellow')
    expect(printColor(150)).toEqual('green')
})

test('isPositive', () => {
    expect.soft(isPositive(-1)).toBe('negative')
    expect.soft(isPositive(0)).toBe('positive')
    expect.soft(isPositive(1)).toBe('positive')
})

test('isNegative' , () => {
    expect.soft(isNegative(5)).toBeTruthy()
    expect.soft(isNegative(-5)).toBeFalsy()
    expect.soft(isNegative(0)).toBeTruthy()
})

test('visokosGod', () => {
    expect.soft(visokosGod(100)).toBe('nevisokos')
    expect.soft(visokosGod(400)).toBe('visokos')
    expect.soft(visokosGod(501)).toBe('nevisokos')
})

test('massive', () => {
    expect.soft(massive()).toEqual([1,0,0,1,0,1,1])
})

test('cyrcleMassive', () => {
    expect.soft(cyrcleMassive()).toEqual([2,10,6,4,11,8,10,4,8,8,9,2])
})

test('doubleMassive', () => { 
    expect.soft(doubleMassive()).toEqual([[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]])
})

test('SetName', () => {
    let student1: Student = new Student('Alesha', '555', 5, 1)
    expect(student1.name).toEqual('Alesha')
    student1.setName('ALex')
    expect(student1.name).toEqual('ALex')
})