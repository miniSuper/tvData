require(['vue', 'chinese-lunar'], function(Vue, ChineseLunar) {
  var app = new Vue({
    el: '#app-container',
    data: {
      scoreList: [1, 2, 0, 0, 4, 3, 8, 7],
      time: '',
      todayAccount: 11001100,
      monthAccount: 2000145522,
      todayVisitors: 3002,
      monthVisitors: 1513464,
      todayPerSales: 33,
      monthPerSales: 26.45,
      usersAll: 45465121,
      usersAdd: 1310,
      todayOrders: 50221,
      monthOrders: 165461345,
      dotsList: [
        {
          x: 133,
          y: 183
        },
        {
          x: 227,
          y: 290
        },
        {
          x: 259,
          y: 260
        },
        {
          x: 536,
          y: 166
        },
        {
          x: 627,
          y: 117
        },
        {
          x: 605,
          y: 164
        },
        {
          x: 390,
          y: 380
        },
        {
          x: 427,
          y: 260
        },
        {
          x: 560,
          y: 200
        },
        {
          x: 490,
          y: 246
        },
        {
          x: 490,
          y: 320
        },
        {
          x: 504,
          y: 354
        },
        {
          x: 530,
          y: 410
        },
        {
          x: 400,
          y: 410
        },
        {
          x: 480,
          y: 440
        },
        {
          x: 513,
          y: 452
        },
        {
          x: 483,
          y: 483
        },
        {
          x: 447,
          y: 507
        },
        {
          x: 420,
          y: 507
        },
        {
          x: 410,
          y: 460
        },
        {
          x: 350,
          y: 442
        },
        {
          x: 286,
          y: 398
        },
        {
          x: 410,
          y: 320
        }
      ]
    },
    methods: {
      // 以 W 为单位
      unitTenThousand(value) {
        return (value / 10000).toFixed(0) + ' 万'
      },
      // 以 K为单位
      unitThousand() {
        return (value / 1000).toFixed(0) + ' 千'
      },
      joinByComma(value) {
        return value
      }
    }
  })
  var scoreValue = 1001200
  var monthAccount = 2000145522
  var todayVisitors = 3002
  var monthVisitors = 565623
  var usersAdd = 3002
  var todayPerSales = 33
  var monthPerSales = 30
  var todayOrders = 50222
  var monthOrders = 165461345
  /**
   *当前年月日
   */
  var date = new Date()
  var time =
    date.getFullYear() +
    '年' +
    (date.getMonth() + 1) +
    '月' +
    date.getDate() +
    '日    ' +
    getWeekDay(date.getDay()) +
    '    ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    '    ' +
    getChineseDay()
  setInterval(function() {
    scoreValue += 1000 * Math.random()
    todayVisitors += 100 * Math.random()
    monthAccount += 1000 * Math.random()
    usersAdd += 100 * Math.random()
    todayPerSales += 4 * Math.random()
    todayPerSales -= 4 * Math.random()
    monthPerSales += 4 * Math.random()
    monthPerSales -= 4 * Math.random()
    todayOrders += 1000 * Math.random()
    monthOrders += 1000 * Math.random()
    app.scoreList = scoreValue
      .toFixed(0)
      .toString()
      .split('')
    app.monthAccount = monthAccount.toFixed(0)
    app.todayVisitors = todayVisitors.toFixed(0)
    app.monthVisitors = monthVisitors + todayVisitors.toFixed(0)
    app.usersAdd = usersAdd.toFixed(0)
    app.usersAll += usersAdd
    app.todayPerSales = todayPerSales.toFixed(2)
    app.monthPerSales = monthPerSales.toFixed(2)
    app.todayOrders = todayOrders.toFixed(0)
    app.monthOrders = monthOrders.toFixed(0)
    app.time = time
  }, 1000)

  function getWeekDay(params) {
    switch (params) {
      case 0:
        return '星期天'
        break
      case 1:
        return '星期一'
        break
      case 2:
        return '星期二'
        break
      case 3:
        return '星期三'
        break
      case 4:
        return '星期四'
        break
      case 5:
        return '星期五'
        break
      case 6:
        return '星期六'
        break
      default:
        break
    }
  }
  function getChineseDay() {
    var lunar = ChineseLunar.solarToLunar(new Date())
    return '农历  ' + ChineseLunar.format(lunar, 'MD')
  }
  // function getMinutes(params) {
  //   return
  // }
})
