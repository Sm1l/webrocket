import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TDataIsChangedState = {
  dataIsChangedInFirebase: boolean;
};

const initialDataIsChangedValue: TDataIsChangedState = { dataIsChangedInFirebase: false };

export const useDataIsChangedStore = create<typeof initialDataIsChangedValue>()(
  devtools(() => initialDataIsChangedValue, { name: "DataIsChanged" })
);

export const dataIsChangedInFirebaseToggle = () => {
  useDataIsChangedStore.setState({
    dataIsChangedInFirebase: !useDataIsChangedStore.getState().dataIsChangedInFirebase,
  });
};
