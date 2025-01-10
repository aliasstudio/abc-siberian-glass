export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'subject-exclamation-mark': [0, 'always'],
  },
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ',',
    },
    messages: {
      skip: '(необязательно)',
      max: 'не более %d символов',
      min: 'не менее %d символов',
      emptyWarning: 'должно быть заполнено',
      upperLimitWarning: 'превышение количества символов',
      lowerLimitWarning: 'недостаточное количество символов',
    },
    questions: {
      type: {
        description: 'Выберите тип фиксируемого изменения',
        enum: {
          feat: {
            description: 'Добавление функции',
            title: 'Новое',
            emoji: '✨',
          },
          fix: {
            description: 'Исправление ошибки',
            title: 'Исправления',
            emoji: '🐛',
          },
          docs: {
            description: 'Изменение документации',
            title: 'Документация',
            emoji: '📚',
          },
          style: {
            description: 'Изменение кода, которое меняет его стиль (отступы, форматирование, знаки препинания и т.д.)',
            title: 'Стиль',
            emoji: '💎',
          },
          refactor: {
            description: 'Изменение кода, которое не является исправлением ошибки или добавлением функции',
            title: 'Рефакторинг',
            emoji: '📦',
          },
          perf: {
            description: 'Изменение кода, которое улучшает производительность',
            title: 'Производительность',
            emoji: '🚀',
          },
          test: {
            description: 'Добавление новых или изменение существующих тестов',
            title: 'Тестирование',
            emoji: '🚨',
          },
          build: {
            description: 'Изменение, которое влияет на сборку или внешние зависимости (gulp, webpack, npm и др.)',
            title: 'Сборка',
            emoji: '🛠',
          },
          ci: {
            description: 'Изменение в конфигурации или скриптах CI/CD (Travis, Circle, Jenkins и др.)',
            title: 'CI/CD',
            emoji: '⚙️',
          },
          chore: {
            description: 'Изменение, которое не затрагивает код или тесты',
            title: 'Прочее',
            emoji: '♻️',
          },
          revert: {
            description: 'Откат внесённых ранее изменений',
            title: 'Откаты',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'Каков контекст этого изменения (например: раздел, компонент, или имя файла)',
      },
      subject: {
        description:
          'Напишите короткое описание изменения с причастием в прошедшем времени и именительном падеже (например: исправлено, добавлена, изменён и т.д.)',
      },
      body: {
        description: 'Укажите дополнительное описание изменения',
      },
      isBreaking: {
        description: 'Является ли это изменение критическим?',
      },
      breakingBody: {
        description: 'Фиксация `BREAKING CHANGE` должна иметь тело — пожалуйста, введите дополнительное описание',
      },
      breaking: {
        description: 'Опишите критические изменения',
      },
      isIssueAffected: {
        description: 'Затрагивает ли это изменение какие-либо открытые задачи?',
      },
      issuesBody: {
        description: 'Если задачи закрыты, фиксация должна иметь тело — пожалуйста, введите дополнительное описание',
      },
      issues: {
        description: 'Добавьте упоминание задач (например: `(#123)`, `fixes #123` или `refs #123`)',
      },
    },
  },
};
