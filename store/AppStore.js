import { observable, autorun } from 'mobx'

export default class AppStore {
  @observable username = ''
  @observable uid = ''

  @observable user = {}

}

const appStore = new AppStore()

/*
autorun(() => {
  console.log(appStore)
})
*/
