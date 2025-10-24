<template>
  <div class="service-card">
    <div class="service-icon">
      <svg v-if="service.icon === 'home'" viewBox="0 0 576 512" width="48" height="48">
        <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" fill="currentColor"/>
      </svg>
      <svg v-else-if="service.icon === 'cleaning'" viewBox="0 0 512 512" width="48" height="48">
        <path d="M512 165.4c0 127.9-70.05 235.3-175.3 270.1c-20.04 7.938-41.83 12.46-64.69 12.46c-64.9 0-125.2-36.51-155.7-94.47c-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.2187-5.602-.6562c-12.89-3.098-20.84-16.08-17.75-28.96c9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208S344.8 192 336 192C228.6 192 151 226.6 96.29 267.6c.1934-10.82 1.242-21.84 3.535-33.05c13.47-65.81 66.04-119 131.4-134.2c28.33-6.562 55.68-6.013 80.93-.0054c56 13.32 118.2-7.412 149.3-61.24c5.664-9.828 20.02-9.516 24.66 .8282C502.7 76.76 512 121.9 512 165.4z" fill="currentColor"/>
      </svg>
      <svg v-else-if="service.icon === 'childcare'" viewBox="0 0 320 512" width="48" height="48">
        <path d="M224 64C224 99.35 195.3 128 160 128C124.7 128 96 99.35 96 64C96 28.65 124.7 0 160 0C195.3 0 224 28.65 224 64zM144 384V480C144 497.7 129.7 512 112 512C94.33 512 80.01 497.7 80.01 480V287.8L59.09 321C49.67 336 29.92 340.5 14.96 331.1C.0016 321.7-4.491 301.9 4.924 286.1L44.79 223.6C69.72 184 113.2 160 160 160C206.8 160 250.3 184 275.2 223.6L315.1 286.1C324.5 301.9 320 321.7 305.1 331.1C290.1 340.5 270.3 336 260.9 321L240 287.8V480C240 497.7 225.7 512 208 512C190.3 512 176 497.7 176 480V384L144 384z" fill="currentColor"/>
      </svg>
    </div>
    
    <div class="service-content">
      <h4 class="service-title">{{ service.title }}</h4>
      <p class="service-description">{{ service.description }}</p>
    </div>
    
    <div class="service-action">
      <router-link :to="service.link" class="service-button">
        Découvrez
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.service-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: var(--color-light-pink);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--color-primary);
}

.service-content {
  flex: 1;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
  font-family: 'Archivo', sans-serif;
}

.service-description {
  color: var(--color-text);
  line-height: 1.6;
  font-size: 1rem;
}

.service-action {
  margin-top: auto;
}

.service-button {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.service-button:hover {
  background-color: var(--color-primary-dark);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .service-card {
    padding: 1.5rem;
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
  
  .service-icon svg {
    width: 36px;
    height: 36px;
  }
  
  .service-title {
    font-size: 1.25rem;
  }
  
  .service-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .service-card {
    padding: 1rem;
  }
  
  .service-icon {
    width: 50px;
    height: 50px;
  }
  
  .service-icon svg {
    width: 30px;
    height: 30px;
  }
  
  .service-title {
    font-size: 1.1rem;
  }
  
  .service-description {
    font-size: 0.9rem;
  }
}
</style>
