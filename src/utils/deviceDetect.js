// Device detection utility for performance optimization

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768
}

export const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false
  
  // Check if mobile
  if (isMobileDevice()) {
    // Additional checks for low-end devices
    const ua = navigator.userAgent.toLowerCase()
    const isOldAndroid = ua.includes('android') && !ua.includes('chrome')
    const hardwareConcurrency = navigator.hardwareConcurrency || 2
    const deviceMemory = navigator.deviceMemory || 2
    
    return isOldAndroid || hardwareConcurrency <= 4 || deviceMemory <= 2
  }
  
  return false
}

export const getOptimalPixelRatio = () => {
  if (typeof window === 'undefined') return 1
  
  // Limit pixel ratio on mobile devices to improve performance
  if (isMobileDevice()) {
    return Math.min(window.devicePixelRatio, 1.5)
  }
  
  return Math.min(window.devicePixelRatio, 2)
}

export const getOptimalParticleCount = (desktopCount) => {
  if (isLowPerformanceDevice()) {
    return Math.floor(desktopCount * 0.2) // 20% on low-end
  }
  if (isMobileDevice()) {
    return Math.floor(desktopCount * 0.4) // 40% on mobile
  }
  return desktopCount
}
