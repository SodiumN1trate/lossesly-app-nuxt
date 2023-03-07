import axios from 'axios'
import Vue from 'vue'

const config = {
  headers: {
    Accept: 'application/json',
    Authorization: localStorage.getItem('auth._token.local')
  }
}

axios.get(process.env.API_ADDRESS + '/user', config).then((response) => {
  const perms = response.data.permissions.map((perm) => {
    return perm.name
  })

  localStorage.setItem('permissions', JSON.stringify(perms))
  localStorage.setItem('roles', JSON.stringify(response.data.roles))
})

Vue.directive('can-permission', {
  inserted: (el, binding, vnode) => {
    if (binding.value && !JSON.parse(localStorage.getItem('permissions'))
      .includes(binding.value
        .replace(/'/g, '')
        .replace(/"/g, ''))) {
      vnode.elm.style.display = 'none'
    }
  }
})

Vue.directive('can-role', {
  inserted: (el, binding, vnode) => {
    console.log(localStorage.getItem('roles'))
    if (binding.value && !JSON.parse(localStorage.getItem('roles'))
      .includes(binding.value)) {
      vnode.elm.style.display = 'none'
      console.log('1')
    }
  }
})
