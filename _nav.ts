import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'master',
    url: '/master',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Department',
        url: '/master/department'
      },
      {
        name: 'Area',
        url: '/master/area'
      },
      {
        name:'LeaveType',
        url:'master/leaveType'
      },
      {
        name: 'AddEmployee',
        url: '/master/AddEmployee'
      },
      {
        name: 'employee-table',
        url: 'master/employee-table'
      },
      {
        name:'HolidayList',
        url:'master/holidays'
      },
      {
        name:'Leave Settings',
        url:'master/leavesettings'

      },
      {
        name:'Create-Employee',
        url:'master/create-employee'
      },
      {
        name:'EmpList',
        url:'master/emplist'
      },
    

    ]
  },

  {
    name: 'visitor',
    url: '/visitor',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'AddVisitor',
        url: '/visitor/addVisitor'
      },

      {
        name: 'visitor-table',
        url: '/visitor/visitor-table'
      },
    ]
  },
  {
    name: 'leave',
    url: '/leave',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add-Leave',
        url: '/leave/add-leave'
      },
      {
        name:'LeaveDetails',
        url:'/leave/leavedetails'
      },
    ]
  },



  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'py-0'
  // },
  // {
  //   name: 'Smart GRC',
  //   url: 'https://lissomsoft.com/smart-grc/#/home',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank', class: '-text-dark' },
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Contact Us',
  //   url: 'https://lissomsoft.com/#/contact-us',
  //   iconComponent: { name: 'cil-layers' },
  //   attributes: { target: '_blank' }
  // }
];
