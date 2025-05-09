import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DressForm } from '../dress-form/dress-form.component';
import { DressFormConfig, DressFormElementDefinition } from '../dress-form/types';

interface FiloElement {
  id: string;
  name: string;
  type: string;
  description: string;
  config: DressFormElementDefinition;
}

@Component({
  selector: 'dress-filo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DressForm],
  templateUrl: './filo.component.html',
  styleUrl: './filo.component.css'
})
export class FiloComponent implements OnInit {
  // State management
  formElements = signal<FiloElement[]>([]);
  selectedElement = signal<FiloElement | null>(null);

  // Form configuration used by dress-form
  formConfig = computed<DressFormConfig<any>>(() => {
    const config: DressFormConfig<any> = {};

    this.formElements().forEach(element => {
      config[element.id] = element.config;
    });

    return config;
  });

  ngOnInit() {
    // Initialize with some sample elements
    this.formElements.set([
      {
        id: 'name',
        name: 'Nome',
        type: 'text',
        description: 'Campo per il nome dell\'utente',
        config: {
          type: 'text',
          label: 'Nome',
          placeholder: 'Inserisci il tuo nome',
          validate: {
            required: true,
            minLength: 2
          }
        }
      },
      {
        id: 'email',
        name: 'Email',
        type: 'email',
        description: 'Campo per l\'email dell\'utente',
        config: {
          type: 'email',
          label: 'Email',
          placeholder: 'Inserisci la tua email',
          validate: {
            required: true,
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          }
        }
      },
      {
        id: 'age',
        name: 'Età',
        type: 'number',
        description: 'Campo per l\'età dell\'utente',
        config: {
          type: 'number',
          label: 'Età',
          placeholder: 'Inserisci la tua età',
          validate: {
            required: false
          }
        }
      }
    ]);

    // Select the first element by default
    if (this.formElements().length > 0) {
      this.selectedElement.set(this.formElements()[0]);
    }
  }

  /**
   * Handles selecting an element from the list
   */
  selectElement(element: FiloElement): void {
    this.selectedElement.set(element);
  }

  /**
   * Adds a new element to the form
   */
  addElement(): void {
    const id = `element_${Date.now()}`;
    const newElement: FiloElement = {
      id,
      name: 'Nuovo Elemento',
      type: 'text',
      description: 'Descrizione del nuovo elemento',
      config: {
        type: 'text',
        label: 'Nuovo Elemento',
        placeholder: 'Inserisci un valore',
        validate: {
          required: false
        }
      }
    };

    this.formElements.update(elements => [...elements, newElement]);
    this.selectedElement.set(newElement);
  }

  /**
   * Removes the selected element from the form
   */
  removeElement(elementId: string): void {
    this.formElements.update(elements =>
      elements.filter(el => el.id !== elementId)
    );

    if (this.selectedElement()?.id === elementId) {
      const remainingElements = this.formElements();
      this.selectedElement.set(remainingElements.length > 0 ? remainingElements[0] : null);
    }
  }

  /**
   * Updates the element name
   */
  updateElementName(name: string): void {
    const element = this.selectedElement();
    if (element) {
      this.formElements.update(elements =>
        elements.map(el => {
          if (el.id === element.id) {
            return { ...el, name };
          }
          return el;
        })
      );
      this.selectedElement.set({ ...element, name });
    }
  }

  /**
   * Updates the element type
   */
  updateElementType(type: string): void {
    const element = this.selectedElement();
    if (element) {
      this.updateElementConfig(element.id, { type: type as any });
      this.selectedElement.update(el => el ? { ...el, type } : null);
    }
  }

  /**
   * Updates the element label
   */
  updateElementLabel(label: string): void {
    const element = this.selectedElement();
    if (element) {
      this.updateElementConfig(element.id, { label });
    }
  }

  /**
   * Updates the element placeholder
   */
  updateElementPlaceholder(placeholder: string): void {
    const element = this.selectedElement();
    if (element) {
      this.updateElementConfig(element.id, { placeholder });
    }
  }

  /**
   * Updates the required validation
   */
  updateElementRequired(required: boolean): void {
    const element = this.selectedElement();
    if (element) {
      const currentValidate = element.config.validate || {};
      this.updateElementConfig(element.id, {
        validate: { ...currentValidate, required }
      });
    }
  }

  /**
   * Updates the element description
   */
  updateElementDescription(description: string): void {
    const element = this.selectedElement();
    if (element) {
      this.formElements.update(elements =>
        elements.map(el => {
          if (el.id === element.id) {
            return { ...el, description };
          }
          return el;
        })
      );
      this.selectedElement.set({ ...element, description });
    }
  }

  /**
   * Updates the properties of an element
   */
  updateElementConfig(elementId: string, updatedConfig: Partial<DressFormElementDefinition>): void {
    this.formElements.update(elements =>
      elements.map(el => {
        if (el.id === elementId) {
          const updatedElement = {
            ...el,
            config: { ...el.config, ...updatedConfig }
          };

          // Update selected element if this is the currently selected one
          if (this.selectedElement()?.id === elementId) {
            this.selectedElement.set(updatedElement);
          }

          return updatedElement;
        }
        return el;
      })
    );
  }

  /**
   * Handles form submission
   */
  onFormSubmit(formData: any): void {
    console.log('Form submitted with data:', formData);
    // Here you would typically send the data to an API
  }
}
