

export const setTheme = ( theme ) => {

  if( !theme ){
    theme = {
      bgColor: 'var(--gradient-one)',
      fontMain: 'var(--black)',
      fonttwo: 'var(--dark-grey)',
      highlightOne: 'var(--yellow)'
    }
  }

  document.documentElement.style.setProperty('--bg-color', theme.bgColor );
  document.documentElement.style.setProperty('--font-main', theme.fontMain );
  document.documentElement.style.setProperty('--font-two', theme.fontTwo );
  document.documentElement.style.setProperty('--highlight-one', theme.highlightOne );
}

export default setTheme
