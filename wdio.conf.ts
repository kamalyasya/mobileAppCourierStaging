import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    specs: ['test/features/**/*.feature'],

    services: ['appium'],

    appium: {
        args: {
            address: 'localhost',
            port: 4723
        }
    },

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Poco X3 Pro',
        'appium:platformVersion': '12',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'id.superapp.courier.stg',
        'appium:appActivity': 'id.superapp.courier.MainActivity',
        'appium:autoGrantPermissions': true,
        'appium:noReset': false
      }],
    
    maxInstances: 1,

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 1,

    framework: 'cucumber',
    
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    cucumberOpts: {
        require: ['test/steps/**/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

}