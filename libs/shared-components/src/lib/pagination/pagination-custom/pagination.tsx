import { useMemo } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export const DOTS = '...';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

interface IUsePagination {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }: IUsePagination) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

interface IPaginationPage {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

export const PaginationPage = (props: IPaginationPage) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  const onNext = (currentPage: number) => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = (currentPage: number) => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const getTotalPageTo = (lastPage: string | number, currentPage: number, pageSize: number, totalCount: number) => {
    return lastPage === currentPage ? totalCount : currentPage * pageSize;
  };

  const getTotalPageFrom = (currentPage: number, pageSize: number) => {
    return currentPage === 1 ? currentPage : currentPage * pageSize - pageSize;
  };

  return (
    <div className={className}>
      <div className='text-[#B9B9C3] text-[14px]'>
        Showing {getTotalPageFrom(currentPage, pageSize)} to&ensp;
        {currentPage === 1 ? pageSize : getTotalPageTo(lastPage, currentPage, pageSize, totalCount)} of {totalCount}
        &ensp; entries
      </div>
      <Pagination>
        <PaginationItem disabled={currentPage === 1} onClick={() => onPrevious(currentPage)} className='prev-item'>
          <PaginationLink className='no-underline' href='#' onClick={(e) => e.preventDefault()}></PaginationLink>
        </PaginationItem>
        {(paginationRange as number[])?.map((pageNumber: number, index: number) => {
          if (pageNumber.toString() === DOTS) {
            return (
              <PaginationItem key={index}>
                <PaginationLink className='no-underline' href='#' onClick={(e) => e.preventDefault()}>
                  {DOTS}
                </PaginationLink>
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={index} active={pageNumber === currentPage} onClick={() => onPageChange(pageNumber)}>
              <PaginationLink className='no-underline' href='#' onClick={(e) => e.preventDefault()}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem onClick={() => onNext(currentPage)} className='next-item' disabled={lastPage === currentPage}>
          <PaginationLink className='no-underline' href='#' onClick={(e) => e.preventDefault()}></PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
};
