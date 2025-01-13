import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlaceholderComponent } from '@app/shared/components/placeholder/placeholder.component';
import { StepBlockComponent } from '@app/shared/components/step-block/step-block.component';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PlaceholderComponent, StepBlockComponent],
})
export class StepsComponent {
  blocks = [
    {
      id: 'consultation',
      title: 'Консультация и проектирование',
      text: 'На первом этапе мы проводим подробную консультацию с заказчиком, обсуждаем все детали проекта и подбираем оптимальные решения для цельностеклянных конструкций.',
    },
    {
      id: 'project',
      title: 'Замеры и подготовка проекта',
      text: 'Наши специалисты выезжают на объект для проведения точных замеров. На основе данных разрабатывается индивидуальный проект с учетом особенностей помещения.',
    },
    {
      id: 'producing',
      title: 'Производство',
      text: 'На этапе производства используются только высококачественные материалы и передовые технологии, чтобы обеспечить надежность и долговечность стеклянных конструкций.',
    },
    {
      id: 'installation',
      title: 'Монтаж конструкции',
      text: 'Наши профессиональные монтажники устанавливают конструкции с высокой точностью и аккуратностью, следуя всем стандартам безопасности и качества.',
    },
    {
      id: 'audit',
      title: 'Финальная проверка и сдача объекта',
      text: 'После завершения монтажа проводится финальная проверка всех узлов и деталей конструкции, чтобы гарантировать безупречный результат.',
    },
    {
      id: 'service',
      title: 'Поддержка и обслуживание',
      text: 'Мы предоставляем услуги гарантийного и постгарантийного обслуживания, обеспечивая долговечность и комфортное использование конструкций.',
    },
  ];
}
