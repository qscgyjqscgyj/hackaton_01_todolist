'use strict';
import TodoItems from './todoItem';
import { TableNames } from '../../../shared/types';

type ModelMap = {
    [key in TableNames]: any;
};
export const modelsMap: ModelMap = { TodoItems };
