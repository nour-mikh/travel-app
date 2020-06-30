import {generateWeather} from './getWeather'

test('should return undefined if called', () => {
    expect(generateWeather()).toBe(undefined)})