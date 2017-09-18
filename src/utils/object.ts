import { differenceBy, intersectionBy } from 'lodash';

/**
 * Signature for object array difference
 */
export interface ObjectArrayDiff {
  added: any[];
  updated: any[];
  removed: any[];
}

/**
 * Get the copy of object without attributes.
 *
 * @param {object} obj
 * @param {any[]} attrsToExclude
 * @returns {object}
 */
export function withoutAttrs(obj: object, attrsToExclude: any[]): object {
  const result: any = {};

  Object.keys(obj).forEach((key: string) => {
    if (!attrsToExclude.includes(key)) {
      result[key] = (obj as any)[key];
    }
  });

  return result;
}

/**
 * Get the copy of object with only specified attributes.
 *
 * @param {object} obj
 * @param {any[]} attrs
 * @returns {object}
 */
export function withOnlyAttrs(obj: object, attrs: any[]): object {
  const result: any = {};

  Object.keys(obj).forEach(key => {
    if (attrs.includes(key)) {
      result[key] = (obj as any)[key];
    }
  });

  return result;
}

/**
 * Compute two arrays of objects and find what items are created, updated, or deleted.
 *
 * @param {object[]} list1
 * @param {object[]} list2
 * @param {string} [key='id']
 * @returns {ObjectArrayDiff}
 */
export function diff(
  list1: object[],
  list2: object[],
  key: string = 'id'
): ObjectArrayDiff {
  const added = list2
    .filter((obj: any) => obj.hasOwnProperty(key) && obj[key] === null)
    .map(obj => withoutAttrs(obj, [key]));
  const updated = intersectionBy(list2, list1, key);
  const removed = differenceBy(list1, list2, key).map((obj: any) => obj[key]);

  return {
    added,
    updated,
    removed
  };
}
