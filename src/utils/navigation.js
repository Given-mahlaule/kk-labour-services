/**
 * Navigation utility for KK Labour Services main site
 * to handle environment-aware routing to careers portal
 */

// Detect current environment
export const getEnvironment = () => {
  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  const isGitHubPages = hostname.includes('github.io');
  
  return {
    isLocalhost,
    isGitHubPages,
    isProd: isGitHubPages
  };
};

// Get the appropriate URLs based on environment
export const getUrls = () => {
  const env = getEnvironment();
  
  if (env.isLocalhost) {
    return {
      mainSite: 'http://localhost:5173', // KK Labour Services main site on localhost
      careersPortal: 'http://localhost:5174', // Careers portal on localhost (different port)
    };
  } else {
    return {
      mainSite: 'https://given-mahlaule.github.io/kk-labour-services',
      careersPortal: 'https://given-mahlaule.github.io/kk-careers-portal',
    };
  }
};

// Navigate to careers portal
export const navigateToCareersPortal = (path = '') => {
  const urls = getUrls();
  const targetUrl = `${urls.careersPortal}${path}`;
  window.location.href = targetUrl;
};

// Handle careers link click from main site
export const handleCareersClick = (e) => {
  e.preventDefault();
  navigateToCareersPortal();
};