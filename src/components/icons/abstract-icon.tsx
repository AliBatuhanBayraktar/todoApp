import React from "react";
import {AbstractIconNamespace} from "../../libs/namespaces/ui/icons/abstract-icon.namespace";

export abstract class AbstractIcon<
    P extends AbstractIconNamespace.AbstractIconPropsInterface,
    S extends AbstractIconNamespace.AbstractIconStateInterface
    > extends React.Component<P, S>{

    constructor(props: P) {
        super(props);
    }

}
