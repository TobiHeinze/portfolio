import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  loading = false; 
  showSuccessMessage = false; 

  async sendMail() {
    if (this.form.valid) {
      this.loading = true;

      const formData = new FormData();
      formData.append('name', this.form.get('name')!.value);
      formData.append('email', this.form.get('email')!.value);
      formData.append('message', this.form.get('message')!.value);

      try {
        const response = await fetch(
          'https://tobias-heinze.com/send_mail/send_mail.php',
          {
            method: 'POST',
            body: formData,
          }
        );

        if (response.ok) {
        //   console.log('Mail erfolgreich gesendet');
          this.form.reset();

          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        } else {
          console.error('Fehler beim Senden der Mail');
        }
      } catch (error) {
        console.error('Ein Fehler ist aufgetreten', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
