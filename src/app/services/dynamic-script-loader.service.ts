// * Base
import { Injectable } from '@angular/core';

// * Types
import { EScriptStoreName } from '../types/script.types';

// * Declares

// * Types

type ILoadScript = {
  status: EScriptReadyState;
  script: EScriptStoreName;
  loaded: boolean;
};

enum EScriptReadyState {
  ALREADY_LOADED = 'Already Loaded',
  COMPLETE = 'complete',
  LOADED = 'loaded',
}

@Injectable()
export default class DynamicScriptLoaderService {
  private readonly scripts = {
    [EScriptStoreName.SWIPER]: {
      src: 'https://unpkg.com/swiper/swiper-bundle.min.js',
      loaded: false,
    },
  };

  load(...scripts: EScriptStoreName[]) {
    const promises: Promise<ILoadScript>[] = [];
    scripts.forEach((script: EScriptStoreName) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: EScriptStoreName): Promise<ILoadScript> {
    return new Promise<ILoadScript>((resolve) => {
      if (!this.scripts[name].loaded) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        script.id = `id-custom-script-${name}`;
        script.async = true;

        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve({ script: name, loaded: true, status: EScriptReadyState.LOADED });
        };

        script.onerror = () => {
          resolve({ script: name, loaded: false, status: EScriptReadyState.COMPLETE });
        };

        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: EScriptReadyState.ALREADY_LOADED });
      }
    });
  }
}
