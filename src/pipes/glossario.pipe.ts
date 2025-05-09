import { inject, Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Pipe({
  name: 'glossario',
  pure: false,
})
export class GlossarioPipe implements PipeTransform {
  private glossary: Record<string, string> = {
    dress: 'project',
    fabric: 'folder',
    plot: 'flow',
    thread: 'module',
    fiber: 'field',
    boutique: 'personal area',
    showcase: 'public gallery',
    Dress: 'Project',
    Fabric: 'Folder',
    Plot: 'Flow',
    Thread: 'Module',
    Fiber: 'Field',
    Boutique: 'Personal Area',
    Showcase: 'Public Gallery',
  };

  user = inject(AuthService).user;

  transform(term: string): string {
    if (!this.user()) {
      return term;
    } else if (!this.user()?.impostazioni?.useGlossaryTerms) {
      return this.glossary[term.toLowerCase()] ?? term;
    }
    return term;
  }
}
