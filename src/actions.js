export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_SURNAME = "CHANGE_SURNAME";
export const SAVE_PRISTINE = "SAVE_PRISTINE";
export const REVERT_PRISTINE = "REVERT_PRISTINE";

export function changeName(newName) {
  return { type: CHANGE_NAME, name: newName };
}

export function changeSurname(newSurname) {
  return { type: CHANGE_SURNAME, surname: newSurname };
}

export function savePristine() {
  return { type: SAVE_PRISTINE };
}

export function revertPristine() {
  return { type: REVERT_PRISTINE };
}
