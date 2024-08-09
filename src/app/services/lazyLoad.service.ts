import { Injectable, ViewContainerRef, ComponentRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LazyLoadService {
  constructor() {}

  async loadComponent<T>(container: ViewContainerRef, path: string): Promise<ComponentRef<T>> {
    const { default: ComponentClass } = await import(`${path}`);
    return container.createComponent(ComponentClass);
  }
}
