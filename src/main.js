import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Enhanced global directive: v-intersect
// ----- Usage -----
// <div v-intersect="{ threshold: 0.5, rootMargin: '0px 0px -25% 0px', once: true }">
// <div v-intersect="0.3">
// ----- Options -----
// threshold: Number (0-1)
// rootMargin: String of 4 values separated by spaces (top, right, bottom, left)
// once: Boolean
// ----- Example -----
// <div v-intersect="{ threshold: 0.5, rootMargin: '0px 0px -25% 0px' }">
// <div v-intersect="0.4">
app.directive('intersect', {
    mounted(el, binding) {
        // Ensure it starts hidden (works with your fade-in CSS)
        el.classList.add('fade-in')

        // Defaults
        let threshold = 0.25
        let rootMargin = '0px 0px -25% 0px'
        let once = true

        // Accept number or object for options
        if (typeof binding.value === 'number') {
            threshold = binding.value
        } else if (binding.value && typeof binding.value === 'object') {
            threshold = binding.value.threshold ?? threshold
            rootMargin = binding.value.rootMargin ?? rootMargin
            once = binding.value.once ?? once
        }

        // Modifiers override config
        if (binding.modifiers.once) once = true
        if (binding.modifiers.repeat) once = false

        // Normalize threshold for IO options (can be number or array)
        const ioOptions = {
            root: null,
            rootMargin,
            threshold: Array.isArray(threshold) ? threshold : [threshold]
        }

        // Observe after layout is stable
        requestAnimationFrame(() => {
            const io = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (entry.intersectionRatio >= (Array.isArray(threshold) ? Math.min(...threshold) : threshold)) {
                        entry.target.classList.add('is-visible')
                        if (once) io.unobserve(entry.target)
                    } else if (!once) {
                        // Reset so it can animate again on re-entry
                        entry.target.classList.remove('is-visible')
                    }
                }
            }, ioOptions)

            el.__io__ = io
            io.observe(el)
        })
    },
    unmounted(el) {
        el.__io__?.disconnect()
        delete el.__io__
    }
})


app.use(router)

app.mount('#app')
