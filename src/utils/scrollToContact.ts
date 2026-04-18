/**
 * Utility function to handle smooth scrolling to contact section
 * with proper URL management that prevents hash concatenation
 */

export const scrollToContact = () => {
  const contactElement = document.getElementById('contact');
  
  if (contactElement) {
    // Get current URL and hash
    const currentUrl = window.location.href;
    const currentHash = window.location.hash;
    
    // Check if URL already has #contact
    if (currentHash === '#contact') {
      // If URL already has #contact, just scroll to the element
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If URL doesn't have #contact, replace the hash entirely
      window.history.replaceState({}, '', '/#contact');
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};

/**
 * Generic scroll to section utility that properly handles URL hashes
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    // Get current hash
    const currentHash = window.location.hash;
    
    // Check if we're already on this section
    if (currentHash === `#${sectionId}`) {
      // Just scroll without changing URL
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Replace the hash entirely to prevent concatenation
      window.history.replaceState({}, '', `/#${sectionId}`);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};

export default scrollToContact;
