// https://github.com/baidu/amis src/Schema.ts
export interface PropsSchema {
  name: string;
  required?: boolean;
  value?: string;
}
export interface ActionsSchema {
  name: string;
  value: ExpressionSchema;
}

/**
 * css类名，配置字符串，或者对象。
 *
 *     className: "red"
 *
 * 用对象配置时意味着你能跟表达式一起搭配使用，如：
 *
 *     className: {
 *         "red": "data.progress > 80",
 *         "blue": "data.progress > 60"
 *     }
 */
export type ClassNameSchema =
  | string
  | {
    [propName: string]: true | false | null | ExpressionSchema;
  };

/**
 * 表达式，语法 `data.xxx > 5`。
 */
export type ExpressionSchema = string;

export interface ComponentSchema {
  name: string;
  package: string;
  props?: PropsSchema[];
  description?: string;
  uuid?: string;
  children?: ComponentSchema[];
  visibleOn?: ExpressionSchema;
}
