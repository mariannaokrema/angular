import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormService } from '../services/Form.service';

export const canActivateFormGuard: CanActivateFn = () => {
  const router = inject(Router);
  const formService = inject(FormService);

  if (formService.isFormValid()) {
    return true;
    // eslint-disable-next-line no-else-return
  } else {
    alert('Form is invalid. Please? fill in all necessary fields.'); // алерт при переході до result
    return router.navigateByUrl('/contact'); // перенаправляє на сторінку контактів, якщо форма невалідна
  }
};
