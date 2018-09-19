export const projects = [
  {
    id: 1,
    name: 'testeroni',
    display: true, /** bool **/
    displayName: 'test pepperoni',
    githubURL: 'www.website.com',
    hostedURL: 'www.hostedwebsite.com',
    // will have to use FS to create 
    // file path that will not break
    snapshotPath: '',
    company: 'RealCompany',
    technology: ['VueJs', 'JavaScript', 'MyBrain', 'FreeTime'],
    description: '<p>Lorem Ipsum</p> <b>Hipster Ipsum Ripstum Coffee</b>'
  },
  {
    id: 2,
    name: 'tester',
    display: true, /** bool **/
    displayName: 'pepperoni',
    githubURL: 'http://website.com',
    hostedURL: 'http://hostedwebsite.com',
    // will have to use FS to create 
    // file path that will not break
    snapshotPath: '',
    company: 'FakeCompany',
    technology: ['AngularJs', 'TypeScript', 'MyFeelings', 'NoTime'],
    description: 'Lorem Ipsum Hipster Ipsum Ripstum Coffee'
  }
]