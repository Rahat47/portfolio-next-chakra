import {
    chakra,
    omitThemingProps,
    ScaleFade,
    useFormControl,
    useMergeRefs,
    useMultiStyleConfig,
    usePopper,
} from '@chakra-ui/react';
import { mergeWith } from '@chakra-ui/utils';
import { useSelect } from 'downshift'; // using version 6.1.3
import {
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    useMemo,
} from 'react';
import { SelectIcon } from '.';

const CustomSelect = forwardRef((props, ownRef) => {
    const { value, children, placeholder, onChange, ...rest } =
        omitThemingProps(props);
    const ownButtonProps = useFormControl(rest);
    const styles = useMultiStyleConfig('CustomSelect', props);
    const validChildren = useMemo(
        () =>
            Children.toArray(children)
                .filter(isValidElement)
                .filter(child => 'value' in child.props),
        [children]
    );
    const items = validChildren.map(child => child.props.value);

    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getMenuProps,
        getItemProps,
    } = useSelect({
        items,
        selectedItem: value,
        onSelectedItemChange: val => onChange?.(val.selectedItem),
    });

    const { referenceRef: popperRef, getPopperProps } = usePopper({
        enabled: isOpen,
        gutter: 2,
    });
    const { ref: useSelectToggleButtonRef, ...useSelectToggleButtonProps } =
        getToggleButtonProps();
    const toggleButtonRef = useMergeRefs(
        ownRef,
        useSelectToggleButtonRef,
        popperRef
    );
    const toggleButtonProps = mergeWith(
        ownButtonProps,
        useSelectToggleButtonProps
    );

    const findRightItem = () => {
        const child = children.find(
            child => child.props.value === selectedItem
        );

        return child.props.children;
    };

    return (
        <chakra.div position='relative'>
            <chakra.button
                ref={toggleButtonRef}
                __css={styles.field}
                {...toggleButtonProps}
            >
                <chakra.span>{findRightItem()}</chakra.span>
                <SelectIcon />
            </chakra.button>
            <chakra.div
                zIndex='1'
                width='100%'
                {...mergeWith(getPopperProps(), {
                    style: {
                        visibility: isOpen ? 'visible' : 'hidden',
                    },
                })}
            >
                <ScaleFade initialScale={0.8} in={isOpen}>
                    <chakra.ul __css={styles.menu} {...getMenuProps()}>
                        {isOpen &&
                            validChildren.map((item, index) =>
                                cloneElement(item, {
                                    ...getItemProps({
                                        item: item.props.value,
                                        index,
                                    }),
                                })
                            )}
                    </chakra.ul>
                </ScaleFade>
            </chakra.div>
        </chakra.div>
    );
});

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
