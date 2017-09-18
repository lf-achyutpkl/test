import { differenceWith, isEqual } from 'lodash';

/**
 * Signature for array difference
 */
export interface ArrayDiff {
  added: any[];
  removed: any[];
}

/**
 * Compute the diff between two arrays and return it.
 *
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {ArrayDiff}
 */
export function diff(arr1: any[], arr2: any[]): ArrayDiff {
  const added = differenceWith(arr2, arr1, isEqual);
  const removed = differenceWith(arr1, arr2, isEqual);

  return { added, removed };
}
