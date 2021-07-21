﻿
using Microsoft.CodeAnalysis;

namespace UdonSharp.Compiler.Binder
{
    internal abstract class BoundExpression : BoundNode
    {
        public bool IsConstant { get { return ConstantValue != null; } }
        public virtual IConstantValue ConstantValue { get { return null; } }

        /// <summary>
        /// If the expression has been traversed and had its body resolved into something that we can emit to uasm
        /// When a expression is resolved, it means the direct dependencies for the expression have been found, but the full dependency tree will not necessarily be resolved until the end of the bind phase.
        /// </summary>
        public virtual bool IsResolved { get { return true; } }

        protected BoundExpression(SyntaxNode node)
            :base(node)
        { }
    }

    internal class BoundConstantExpression : BoundExpression
    {
        IConstantValue _constantValue;
        public override IConstantValue ConstantValue { get { return _constantValue; } }

        public BoundConstantExpression(IConstantValue constantValue, SyntaxNode node)
            :base(node)
        {
            _constantValue = constantValue;
        }

        public override string ToString()
        {
            return $"BoundConstantExpression<{ConstantValue.GetType().GetGenericArguments()[0]}>: " + ConstantValue.Value?.ToString() ?? "null";
        }
    }
}
