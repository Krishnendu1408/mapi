
export const loadGMaps = (): Promise<typeof google> => {
  return new Promise((resolve, rejects)=> {
    const existingScript = document.getElementById("googleMaps");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD44_D7amWWfM77MCt9lZXCb_iP5_TvcvU&callback=initialize&libraries=&v=weekly";
      script.id = "googleMaps";
      document.body.appendChild(script);
      (window as any).initialize = () => { resolve(google) };
      script.onerror = rejects
    }
    if (existingScript) resolve(google);
  })

};
